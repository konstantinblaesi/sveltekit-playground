# Containerized sveltekit using node-adapter using $env/dynamic/private

`podman` and `docker` can be used interchangeably

## Building

### podman
`podman build -t sv-kit -f Containerfile .`

## Running
`podman run --rm -it -p 3000:3000 -e SOME_SECRET=hello-world --name sv-kit sv-kit:latest`

## Stopping (for some reason it is not picking but CTRL +C / SIGINT ?)

`podman stop -t 0 sv-kit`
