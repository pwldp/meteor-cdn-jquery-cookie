//Generate script tag in header
var sjs = document.createElement('script');
sjs.type = 'text/javascript';
sjs.src = '//cdn.jsdelivr.net/jquery.cookie/1.4.0/jquery.cookie.min.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(sjs);

