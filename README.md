#### Getting Started

```
git clone git@github.com:OR13/did-onion.js.git
./generate.sh
docker-compose up --build
```

Grab the entrypoint and drop it into a browser:

```
tor_1 | Entrypoint INFO service1: mmn5gpyapnjatgtq.onion:80

```

#### Reading

- https://hub.docker.com/r/nwtgck/mkp224o

```
docker run -it -v $(pwd)/keys:/keys nwtgck/mkp224o /bin/bash /keys/gen.sh
```

- https://github.com/cmehay/docker-tor-hidden-service
