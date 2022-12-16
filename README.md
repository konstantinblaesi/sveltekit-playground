# Containerized sveltekit

`podman` and `docker` can be used interchangeably

## Building

### podman
`podman build -t sv-kit -f Containerfile .`

## Running
`podman run --rm -it -p 3000:3000 --name sv-kit sv-kit:latest`

## Stopping

`podman stop sv-kit`
