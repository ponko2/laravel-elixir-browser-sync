# laravel-elixir-browser-sync

## Install

```sh
$ npm install laravel-elixir-browser-sync --save-dev
```

## Usage

### Laravel Homestead

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync');

elixir(function(mix) {
    mix.browserSync();
});
```

### artisan serve

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync');

elixir(function(mix) {
    mix.browserSync('', {
        proxy: 'localhost:8000'
    });
});
```
