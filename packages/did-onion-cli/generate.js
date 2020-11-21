const { Ed25519KeyPair, driver } = require("@transmute/did-key-ed25519");
const crypto = require('crypto');
const fs = require('fs');
const { parse } = require("path");
const path = require('path');
const YAML = require('yaml');

(async ()=>{

    const service = fs.readFileSync(path.resolve(__dirname, '../../keys/hidden-service.yaml')).toString();
  
    const parsedService = YAML.parse(service);
    const did = `did:onion:${parsedService.hostname.split('.onion')[0]}`
    const envFile = `
SERVICE1_TOR_SERVICE_VERSION="3"
SERVICE1_TOR_SERVICE_HOSTS="80:hello:80"
SERVICE1_TOR_SERVICE_KEY="${parsedService.hs_ed25519_secret_key}"
`
fs.writeFileSync(path.resolve(__dirname, '../../keys/.env'), envFile);
    

    const k0 = await Ed25519KeyPair.generate({
        secureRandom: ()=>{
            return crypto.randomBytes(32)
        }
    })
    const k1 = await k0.toX25519KeyPair(true)
    const didKeys = {
        ed25519: k0.toJsonWebKeyPair(true),
        x25519: k1.toJsonWebKeyPair(true),
    }
  

    const { didDocument } = await driver.resolve(didKeys.ed25519.controller, {accept: 'application/did+json'});
    
    didKeys.ed25519.controller = did;
    didKeys.x25519.controller = did;
    didDocument["@context"][1]["@base"] = did;
    didDocument.id = did;
    didDocument.verificationMethod[0].controller = did;
    didDocument.verificationMethod[1].controller = did;
    fs.writeFileSync(path.resolve(__dirname, '../../keys/did.json'), JSON.stringify(didKeys, null, 2));
    fs.writeFileSync(path.resolve(__dirname, '../../hidden-service/.well-known/did.json'), JSON.stringify(didDocument, null, 2))

})()