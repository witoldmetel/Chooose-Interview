# Chooose Interview

Display data received from the endpoint and display them according to the mockups.

## Project Requirements

- [x] The website should be responsive and built with ReactJS functional components and Typescript.
- [x] ChakraUI should be used for UI components.
- [x] Data should be downloaded asynchronously from a mock server, serving JSON files (using any technology).
- [ ] Details of a trip should be pulled from a separate single-trip endpoint.
- [x] New cards should be loaded on page scroll (infinite scrolling).
- [ ] Data from the server should be cached and preserved between pages.
- [x] The code should be placed in any repository along with instructions on how to run the project.
- [ ] Cover the code with tests.

## Getting Started

1. Install dependencies

```sh
yarn
```

2. Run server locally

```sh
yarn start:server
```

NOTE: If you are running it for first time, run command:

```sh
npm install -g json-server
```

That gonna install [JSON Server](https://github.com/typicode/json-server)

3. Run app locally

```sh
yarn start:dev
```

NOTE: You can simplify process, run command:

```sh
yarn start
```

4. To start working on code, open app locally:

```
http://localhost:3000/
```

Run unit tests

```
yarn test
```
