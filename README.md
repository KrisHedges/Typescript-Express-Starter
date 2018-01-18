# TypeScript Express Starter

## Installing Dependencies:
### Global

``` 
npm install -g typescript 
npm install -g ts-node 

* You may need to install pkill as well
brew install pkill 

```

### Local

``` npm install ```

## Usage
You can then use the following commands.

- `npm run build` -  Runs `tsc` in the root directory compiling all ts file in /src and out putting them to /dist

- `npm run dev` - Runs `tsc-watch`, cleans up any old pid files, watches all ts files in /src for changes, and starts ts-node. will cycle through the server on file changes to ts files in /src.

- `npm run prod` - Runs the `tsc` build process and fires up node in the /dist directory no Typescript

- `npm run stop` - You can use this to clean up any leftover pid files after a ^C