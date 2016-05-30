activate :directory_indexes
activate :autoprefixer

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :layout, "layouts/application"

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

configure :development do
  activate :livereload
end

configure :build do
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

activate :sprockets do |c|
  c.imported_asset_path = "assets/fonts"
end

activate :google_analytics do |ga|
  ga.tracking_id = "UA-48998399-1"
  ga.domain_name = "carb.io"
  ga.allow_linker = true
  ga.enhanced_link_attribution = true
  ga.debug = false
  ga.development = false
  ga.minify = false
  ga.output = :html
end
