Package.describe({
        summary: "jquery.cookie plugin loaded via CDN"
});

Package.on_use(function (api){
        api.add_files('load.js', 'client');
});
