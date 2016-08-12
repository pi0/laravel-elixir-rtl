# laravel-elixir-rtl
[![npm version](https://badge.fury.io/js/laravel-elixir-rtl.svg)](https://badge.fury.io/js/laravel-elixir-rtl)
  
**RTL Extension For Laravel Elixir.**
  
![](http://rtlcss.com/css/pix/logo.svg)
  
This extension uses [RTLCSS](http://rtlcss.com/)
Framework for converting Left-To-Right (LTR) Cascading Style Sheets(CSS) to Right-To-Left (RTL). 

## Usage

First require extension:
```js
require('laravel-elixir-rtl');
```

Then you can easily use `rtl` in your elixir pipes:
```js
mix.rtl('public/css/app.css', 'public/css/rtl');
```