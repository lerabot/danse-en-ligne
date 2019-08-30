// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
//
$(document).ready(function () {
  var str, newUrl, localUrl;

  $.each($('a[class*=getUrl]'), function (index, item) {
    str = $(item).attr('href');


    ////pas sure
    if ('str[href*=localhost]') {

      var rec = str.replace('videos', 'records');
      $(item).attr('href', rec);

    } else {
      var env = str.replace('localhost:3000', 'https://www.vapid.com');
      $(item).attr('href', str);
    }
  });
});
