# carb.io marketing site

## About Middleman

Middleman is a static site generator built in Ruby. This makes it a great fit
for projects that may end up as a Ruby on Rails app. Its minimalistic structure
makes it very easy to work with, and includes support for deploying to Github
Pages.

## Includes

* [HAML](http://haml.info):
  Simple template markup
* [Coffeescript](http://coffeescript.org):
  Write javascript with simpler syntax
* [Sass (LibSass)](http://sass-lang.com):
  CSS with superpowers
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Middleman Live Reload](https://github.com/middleman/middleman-livereload):
  Reloads the page when files change
* [Middleman Deploy](https://github.com/karlfreeman/middleman-deploy):
  Deploy your Middleman build via rsync, ftp, sftp, or git (deploys to Github Pages by default)

## Getting Started

Set up your project in your code directory
```
git clone https://github.com/Carburetor/carb.io.git
cd carb.io
```

Install dependencies:
```
bundle install
```

Run the server
```
bundle exec middleman
```

Deploy to Github Pages
```
bundle exec middleman deploy
```

Or install the [Proteus gem](https://github.com/thoughtbot/proteus) and enjoy some shortcuts.

## Directories

Stylesheets, fonts, images, and JavaScript files go in the `/source/assets/` directory.
Vendor stylesheets and JavaScripts should go in each of their `/vendor/` directories.
