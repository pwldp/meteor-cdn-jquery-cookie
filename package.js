Package.describe({
        summary: "jquery.cookie plugin loaded via CDN"
});

Package.on_use(function (api){
        api.add_files('enable_cdn_in_BrowserPolicy.js', 'server');
        api.add_files('load.js', 'client');
});
