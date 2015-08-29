/* 

  Main JavaScript for WxOutlook Development 

         Uses Weather.com API.

*/





/* Modernizr 2.8.3 (Custom Build) | MIT & BSD

 * Build: http://modernizr.com/download/#-svg-shiv-cssclasses-teststyles-load

 */

;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

function alertInfo(msg){

  $("#wx-alerts").after(

    '<div class="card-panel light-blue lighten-3">' +

          '<span class="light-blue-text text-darken-3">'+

            msg +

          '</span>' +

        '</div>'

  );

}

function alertWatch(msg){

  $("#wx-alerts").after(

    '<div class="card-panel orange lighten-3">' +

          '<span class="orange-text text-darken-3">'+

            msg +

          '</span>' +

        '</div>'

  );

}

function alertWarning(msg){

  $("#wx-alerts").after(

    '<div class="card-panel red lighten-2">' +

          '<span class="red-text text-darken-4">'+

            msg +

          '</span>' +

        '</div>'

  );

}





/* Main code for weather */

$(document).ready(function(){

  var config = {

    useSvg: Modernizr.svg

  };

  var iconCodeMap = {

      'tornado': ['0', '00'],

      'tropical-storm': ['1', '01', '2', '02'],

      'thunderstorm': ['3', '03', '4', '04'],

      'rain-snow': ['5', '05', '7', '07'],

      'rain-hail': ['6', '06', '10', '35'],

      'freezing-drizzle': ['8', '08'],

      'scattered-showers': ['9', '09', '11', '39'],

      'rain': ['12'],

      'flurries': ['13'],

      'snow': ['14', '16'],

      'blowing-snow': ['15', '25'],

      'hail': ['17', '18'],

      'fog': ['19', '20', '21', '22'],

      'wind': ['23', '24'],

      'cloudy': ['26'],

      'mostly-cloudy-night': ['27'],

      'mostly-cloudy': ['28'],

      'partly-cloudy-night': ['29'],

      'partly-cloudy': ['30'],

      'clear-night': ['31'],

      'sunny': ['32', '36'],

      'mostly-clear-night': ['33'],

      'mostly-sunny': ['34'],

      'isolated-thunderstorms': ['37'],

      'scattered-thunderstorms': ['38'],

      'heavy-rain': ['40'],

      'scattered-snow': ['41'],

      'heavy-snow': ['42', '43'],

      'na': ['-', '44', 'na'],

      'scattered-showers-night': ['45'],

      'scattered-snow-night': ['46'],

      'scattered-thunderstorms-night': ['47']

    };

    

    

  function getIcon(code){
    var code = code.toString();
    var name;
    for (var key in iconCodeMap){
      if(iconCodeMap.hasOwnProperty(key)){
        for(var i=0; i < iconCodeMap[key].length; i++){
          var kha = iconCodeMap[key];
          var id = kha[i];
          if(id==code){
            return key;
          }
        }
      }
    }
    return "na";
  }
  function getUrl(id){
    var icon = getIcon(id);
    var base = 'http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/';
    var url;
    if(config.useSvg){
      url = base+"svgz/"+icon+".svgz";
    }else{
      url = base+"png/"+icon+".png";
    }
    return url;
  }
  function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ampm;
        return strTime;
    }

  function updateWeather(zip){
    $.get("lib/proxy.php", {url: "http://dsx.weather.com/wxd/v2/NCRecord/en_US/"+zip.toString()}, function(data){
      var data = JSON.parse(data);
      var NCData = data.NCData;
      console.log(data);
      $("#wx-city").html('<strong>City:</strong> <p class="red-text text-lighten-2">BROKEN</p>');
      $("#wx-temp").html('<strong>Temperature:</strong> ');
      $("#wx-conditions").html(NCData.NCphrase512 || NCData.NCphrase256 || NCData.NCphrase128 || NCData.NCphrase32);
      
      $("#wx-icon").attr("src", getUrl(NCData.NCsky));

    });

    $.get("lib/proxy.php", {url:"http://dsx.weather.com/wxd/v2/15DayForecast/en_US/"+zip.toString()}, function(data){
      var data = JSON.parse(data);
      var fc = data.fcstdaily15alluoms.forecasts;
      var ga = 1;
      for(var i=0; i < fc.length; i++){
        var forecast = fc[i];
        var day = forecast.day;
        var night = forecast.night;
        if(day){
          $("#wxf-title-"+ga.toString()).html("<strong>"+forecast.dow.toString()+"</strong>("+forecast.fcst_valid_local.substring(0,10)+")");
          $("#wxf-icon-"+ga.toString()).attr("src", getUrl(day.icon_code));
          $("#wxf-content-"+ga.toString()).html("<strong>Today:</strong> "+day.imperial.narrative +"<br><strong>Tonight:</strong> "+night.imperial.narrative);
        }else{
          $("#wxf-title-"+ga.toString()).html("<strong>"+forecast.dow.toString()+"</strong>("+forecast.fcst_valid_local.substring(0,10)+")");
          $("#wxf-icon-"+ga.toString()).attr("src", getUrl(night.icon_code));
          $("#wxf-content-"+ga.toString()).html("<strong>Today:</strong> N/A<br><strong>Tonight:</strong> "+night.imperial.narrative);
        }
        ga = ga + 1;
      }
      //console.log(data);
    });
    $.get("lib/proxy.php", {url: "http://dsx.weather.com/wxd/v2/DHRecord/en_US/"+zip}, function(data){
      var data = JSON.parse(data);
      // not being used right now...
      //console.log(data);
    });
    $.get("lib/mobagg.php", {zip: zip}, function(data){
      var data = JSON.parse(data);
      var root = data[0];
      console.log(data);
      var g = 1;
      for(i=0; i < root.HourlyForecasts.length; i++){
        var hourly = root.HourlyForecasts[i];
        var date = new Date(0);
        date.setUTCSeconds(hourly.dateTime);
        //$("#wx-fc-"+g.toString()).html('<span class="light-blue-text text-lighten-3"><p class="fc-hour">'+formatAMPM(date)+'</p><br>'+hourly.wDesc+'</span>');
        $("#wxh-title-"+g.toString()).html(formatAMPM(date));
        $("#wxh-icon-"+g.toString()).attr("src", getUrl(hourly.icon));
        $("#wxh-content-"+g.toString()).html("Temp: "+hourly.temp+" <strong>|</strong> Feels Like: "+hourly.feelsLike + "<br>"+hourly.wDesc + " <strong>|</strong> Wind going "+hourly.wDirText+" with a speed of "+hourly.wSpeed +" mph");
        g=g+1;
      }
      var f = 1;
      for(i=0; i < root.WeatherAlerts.length; i++){
        var alertf = root.WeatherAlerts[i];
        var textf = alertf.text;
        var text = '<div class="more">'+textf+'</div>'
        var headline = alertf.headline;
        var desc = alertf.description;
        var areaName = alertf.areaName;
        var severity = alertf.severity;
        if(severity <= 1){
          alertWarning(headline+"<br>"+text);
        }if(severity >= 2){
          alertWatch(headline+"<br>"+text);
        }
        f = f + 1;
      }
      var showChar = 250;
      var ellipsestext = "...";
      var moretext = "more";
      var lesstext = "less";
      $('.more').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar-1, content.length - showChar);
          var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
          $(this).html(html);
        }
      });
      $(".morelink").click(function(){
        if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
        } else {
          $(this).addClass("less");
          $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
      });
      $(".wx-zip").each(function(){
        $(this).html("<strong>Zip:</strong> "+zip.toString());
      });
      $(".wx-dbg").each(function(){
        var dbgf = "No";
        if(debug==true){
          dbgf = "Yes";
        }
        $(this).html("<strong>Debug:</strong> "+dbgf.toString());
      });
    });
    if(debug==true){
      alertWarning("debug:"+lat+":"+lng+":"+zip+":made by relative");
    }
  }
  if(zip.substring(0,2)=="CA"){
    updateWeather(zip);
  }else{
    updateWeather(zip+":4:US");
  }
});