# modulefederation-angular
Module federation built with Angular

## How to run
Install dependecies on folder *module federation*
```js
npm i
```

Run those commands in different terminals:

Open the localhost that *shell* will provide to us
```js
ng serve shell -o
```

```js
ng serve mfe1 -o
```

Run this command on folder *module-federation/projects/shared/src/lib* to our fake back-end
```js
json-server --watch db.json
```

## About
Project built with:
* Angular 14
* Module Federation (shell / mfe1 / internal library)
* Library to share services and modules
* Material
* [json-server](https://github.com/typicode/json-server) to fake back-end

## Referencies
[Referencies](https://dev.to/manfredsteyer/tutorial-getting-started-with-webpack-module-federation-and-angular-2edd)
