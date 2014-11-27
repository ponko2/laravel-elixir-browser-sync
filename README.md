# laravel-elixir-browser-sync

## Install

```sh
$ composer global require "laravel/homestead=~2.0"
$ homestead init
$ homestead edit
```

```sh
$ npm install laravel-elixir-browser-sync --save-dev
```

## Usage

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync');

elixir(function(mix) {
  mix.browserSync([
    'app/**/*',
    'public/**/*',
    'resources/views/**/*'
  ], {
    proxy: 'homestead.app'
  });
});
```

```sh
$ homestead up
$ gulp watch
```
