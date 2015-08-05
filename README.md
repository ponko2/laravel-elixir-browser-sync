# laravel-elixir-browser-sync

## Install

```sh
$ composer global require "laravel/homestead=~2.0"
$ homestead init
$ homestead edit
```

#### Laravel Elixir 2.x

```sh
$ npm install laravel-elixir-browser-sync@0.1.7 --save-dev
```

#### Laravel Elixir 3.x

```sh
$ npm install laravel-elixir-browser-sync@beta --save-dev
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
    proxy: 'homestead.app',
    reloadDelay: 2000
  });
});
```

#### Laravel Elixir 2.x

```sh
$ homestead up
$ gulp watch
```

#### Laravel Elixir 3.x

```sh
$ homestead up
$ gulp serve watch
```
