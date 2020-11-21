#### Getting Started

```
git clone git@github.com:OR13/did-onion.js.git
npm i
npm run generate
npm run start
```

Grab the entrypoint and drop it into a browser:

```
tor_1        | Entrypoint INFO     service1: loll65o6clhutxfv4ce4rdvgugcf2aqee2ju6vsrepw6vr6l66bxtsid.onion:80
```

Open a tor browser and visit the service like this:

```
http://loll65o6clhutxfv4ce4rdvgugcf2aqee2ju6vsrepw6vr6l66bxtsid.onion
```

You should be redirected (client side) to a page that looks like:

```
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    {
      "@base": "did:onion:loll65o6clhutxfv4ce4rdvgugcf2aqee2ju6vsrepw6vr6l66bxtsid"
    }
  ],
  "id": "did:onion:loll65o6clhutxfv4ce4rdvgugcf2aqee2ju6vsrepw6vr6l66bxtsid",
  "verificationMethod": [
    {
      "id": "#z6MkebtkkzB2AdJ8zQa5MYFVGdLuseSDap4qRjTF7mLnjJY8",
      "type": "JsonWebKey2020",
      "controller": "did:onion:loll65o6clhutxfv4ce4rdvgugcf2aqee2ju6vsrepw6vr6l66bxtsid",
      "publicKeyJwk": {
        "crv": "Ed25519",
        "x": "AjYnhJL1X6rXqm-Kh0nYJ_-lf3qNs730nsDLKYyj47E",
        "kty": "OKP"
      }
    },
    {
      "id": "#z6LSpJyFSoRVoh88oSiNXzUHjS6t4tBtwnR43qksiA8uEV93",
      "type": "JsonWebKey2020",
      "controller": "did:onion:loll65o6clhutxfv4ce4rdvgugcf2aqee2ju6vsrepw6vr6l66bxtsid",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "X25519",
        "x": "u7lCtJzKJjcPFttMh89C4vBlbYuN4h2EQlxBQKE02yo"
      }
    }
  ],
  "authentication": [
    "#z6MkebtkkzB2AdJ8zQa5MYFVGdLuseSDap4qRjTF7mLnjJY8"
  ],
  "assertionMethod": [
    "#z6MkebtkkzB2AdJ8zQa5MYFVGdLuseSDap4qRjTF7mLnjJY8"
  ],
  "capabilityInvocation": [
    "#z6MkebtkkzB2AdJ8zQa5MYFVGdLuseSDap4qRjTF7mLnjJY8"
  ],
  "capabilityDelegation": [
    "#z6MkebtkkzB2AdJ8zQa5MYFVGdLuseSDap4qRjTF7mLnjJY8"
  ],
  "keyAgreement": [
    "#z6LSpJyFSoRVoh88oSiNXzUHjS6t4tBtwnR43qksiA8uEV93"
  ]
}
```

#### Reading

- https://hub.docker.com/r/nwtgck/mkp224o
- https://github.com/cmehay/docker-tor-hidden-service
