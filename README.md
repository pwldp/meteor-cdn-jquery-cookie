meteor-cdn-jquery-cookie
========================

Meteorite smart package for [jquery.cookie](https://github.com/carhartl/jquery-cookie) plugin loaded from [cdn](http://www.jsdelivr.net)


## How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add cdn-jquery-cookie`

## Browser policy
if you are using the `browser-policy` package, you'll need to add this line to a file in your `/server/` directory to allow the browser to load from the cdn
```
BrowserPolicy.content.allowOriginForAll('*.jsdelivr.net');
```




[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/pwldp/meteor-cdn-jquery-cookie/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

