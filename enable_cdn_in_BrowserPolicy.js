try {
    BrowserPolicy.content.allowOriginForAll('*.jsdelivr.net');
}
catch (e) {
    console.log("BrowserPolicy isn't installed");
};
