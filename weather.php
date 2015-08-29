<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/1.1.70/css/materialdesignicons.min.css">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />    <?php
      echo "<script>\n";
      echo "var zip='".$_GET["zip"]."';\n";
      echo "var debug='".$_GET["debug"]."';\n";
      echo "</script>\n";
    ?>
    
    <style>
      hr {
        color: #B6B6B6;
        background-color: #B6B6B6;
      }
      .box-icon {
        background-color: #dd4814;
        border-radius: 5%;
        height: 125px;
        margin: 0 auto;
        width: 125px;
        margin-top: 0px;
      }
      .icon {
        margin-left: 3px;
        width: 120px;
        height: 120px;
      }
      .row.vdivide [class*='col']:not(:last-child):after {
        background: #e0e0e0;
        width: 3px;
        content: "";
        display:block;
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        min-height: 70px;
      }
      #map {
        height: 720px;
      }
      .fc-hour {
        margin-left: 5px;
        margin-right: auto;
      }
      a.morelink {
        text-decoration:none;
        outline: none;
      }
      .morecontent span {
        display: none;
      }
      .comment {
        width: 400px;
        background-color: #f0f0f0;
        margin: 10px;
      }
    </style>
    <title>wxoutlook [DEV]</title>
  </head>
  <body>
    <nav role="navigation" class="light-blue darken-2">
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi mdi-menu"></i></a>
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">WxOutlook<sub style="font-size: 14px">dev</sub></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li class="active"><a href="#">Weather</a></li>
          <li><a href="#" class="wx-zip"><strong>Zip:</strong> </a></li>
          <li><a href="#" class="wx-dbg"><strong>Debug:</strong> </a></li>
        </ul>
        <ul id="nav-mobile" class="side-nav">
          <li><a href="#">Home</a></li>
          <li class="active"><a href="#">Weather</a></li>
          <li><a href="#" class="wx-zip"><strong>Zip:</strong> </a></li>
          <li><a href="#" class="wx-dbg"><strong>Debug:</strong> </a></li>
        </ul>
      </div>
    </nav>
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <div id="wx-alerts"></div>
        <br><br>        
        <h2 class="header center">Whats Happening Now?</h2>
        <hr>
        <div class="row vdivide">
          <div class="col s12 m6 l3 text-center">
            <div class="box-icon">
              <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="icon" id="wx-icon"></img>
            </div>
          </div>
          <div class="col s12 m6 l9">
            <!--<p id="wx-city"><strong>City:</strong> N/A</p>
            <p id="wx-temp"><strong>Temperature:</strong> N/A</p>-->
            <p id="wx-conditions"><strong>N/A</strong></p>
          </div>
        </div>
        <br>        <div class="row">          <div class="col s12">            <ul class="tabs">              <li class="tab col s3"><a class="active" href="#wx-15d">15 Day Forecast</a></li>              <li class="tab col s3"><a href="#wx-hourly">Hourly Forecast</a></li>              <li class="tab col s3 disabled"><a href="#othingn">Nothing</a></li>              <li class="tab col s3 disabled"><a href="#othingn">Nothing</a></li>            </ul>          </div>          <div id="wx-15d" class="col s12">            <ul class="collection">          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-1"></img>            <span class="title" id="wxf-title-1">N/A</span>            <p id="wxf-content-1">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-1"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-2"></img>            <span class="title" id="wxf-title-2">N/A</span>            <p id="wxf-content-2">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-2"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-3"></img>            <span class="title" id="wxf-title-3">N/A</span>            <p id="wxf-content-3">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-3"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-4"></img>            <span class="title" id="wxf-title-4">N/A</span>            <p id="wxf-content-4">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-4"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-5"></img>            <span class="title" id="wxf-title-5">N/A</span>            <p id="wxf-content-5">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-5"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-6"></img>            <span class="title" id="wxf-title-6">N/A</span>            <p id="wxf-content-6">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-6"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-7"></img>            <span class="title" id="wxf-title-7">N/A</span>            <p id="wxf-content-7">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-7"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-8"></img>            <span class="title" id="wxf-title-8">N/A</span>            <p id="wxf-content-8">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-8"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-9"></img>            <span class="title" id="wxf-title-9">N/A</span>            <p id="wxf-content-9">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-9"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-10"></img>            <span class="title" id="wxf-title-10">N/A</span>            <p id="wxf-content-10">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-10"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-11"></img>            <span class="title" id="wxf-title-11">N/A</span>            <p id="wxf-content-11">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-11"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-12"></img>            <span class="title" id="wxf-title-12">N/A</span>            <p id="wxf-content-12">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-12"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-13"></img>            <span class="title" id="wxf-title-13">N/A</span>            <p id="wxf-content-13">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-13"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-14"></img>            <span class="title" id="wxf-title-14">N/A</span>            <p id="wxf-content-14">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-14"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxf-icon-15"></img>            <span class="title" id="wxf-title-15">N/A</span>            <p id="wxf-content-15">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxf-scnd-15"></a>          </li>        </ul>          </div>          <div id="wx-hourly" class="col s12">            <ul class="collection">          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-1"></img>            <span class="title" id="wxh-title-1">N/A</span>            <p id="wxh-content-1">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-1"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-2"></img>            <span class="title" id="wxh-title-2">N/A</span>            <p id="wxh-content-2">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-2"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-3"></img>            <span class="title" id="wxh-title-3">N/A</span>            <p id="wxh-content-3">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-3"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-4"></img>            <span class="title" id="wxh-title-4">N/A</span>            <p id="wxh-content-4">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-4"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-5"></img>            <span class="title" id="wxh-title-5">N/A</span>            <p id="wxh-content-5">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-5"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-6"></img>            <span class="title" id="wxh-title-6">N/A</span>            <p id="wxh-content-6">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-6"></a>          </li>          <li class="collection-item avatar">            <img src="http://www.weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/png/na.png" class="circle" id="wxh-icon-7"></img>            <span class="title" id="wxh-title-7">N/A</span>            <p id="wxh-content-7">N/A<br>              N/A</p>            <a href="#!" class="secondary-content" id="wxh-scnd-7"></a>          </li>        </ul>          </div>        </div>
        
        <br>
        <!--<h2 class="header center">Radar</h2>
        <hr>
        <div style="text-align: center">
          <div id="CCRAD"></div>
          <object type="application/x-shockwave-flash" data="http://radar.weather.gov/flanis.swf" width="620" height="700" id="CCRAD">
            <param name="movie" value="http://radar.weather.gov/flanis.swf">
            <param name="quality" value="high">
            <param name="menu" value="false">
            <param name="base" value="http://radar.weather.gov/">
            <param name="FlashVars" value="debug=false&overlay_gap%20=%201&controls_gap%20=%203&backcolor%20=%200x0A2390&autorefresh_labels%20=%20AutoUpdate%20is%20Off,%20AutoUpdate%20is%20On,%20150&controls=framelabel&bottom_controls%20=%20overlay,%20startstop,%20looprock,%20step,firstlast,speed,autorefresh/off,%20refresh,toggle&overlay_zoom%20=%20y,y,y,y,y,y,y,n&overlay_labels%20=%20Topo/on,%20Radar/on,%20Counties/on,%20Rivers,%20Highways/on,%20Cities/on,%20Warnings/on,%20Legend/on&file_of_filenames=tfx_N0R_overlayfiles.txt&transparency%20=%20x000000&no_enh=true&auto_refresh%20=%203&pause=500&keep_zoom=true&frame_label_width%20=%20180&active_zoom%20=%20true&keep_zoom%20=%20true&forecolor%20=%20xffffff&zoom_factor%20=%2010">
          </object>
        </div>
        <br><br>
      </div>-->
    </div>
    <footer class="page-footer light-blue">
      <div class="container">
        <p id="currentprovider">Thanks <a href="http://weather.com">The Weather Channel</a> for the API which all weather information is from.</p>
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Relative</h5>
            <p class="grey-text text-lighten-4">
              Hello. My name is Relative(aka Seth) and I love to webdesign and program. I've worked on many projects for myself and others. My current project that I am working on is <a class="link" href="http://wxoutlook.xyz">WxOutlook</a>.
            </p>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Contact</h5>
            <ul>
              <!--<li><a class="white-text" href="#!">Link 1</a></li>-->
              <a class="white-text">Nothing (yet)!</a>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>              <li><a class="white-text" href="https://twitter.com/SethFNC"><i class="mdi mdi-twitter"></i> SethFNC</a></li>
              <li><a class="white-text" href="https://youtube.com/c/RelativeGaming"</a><i class="mdi mdi-youtube-play"></i> Relative</li>
              <li><a class="white-text" href="https://plus.google.com/+RelativeGaming"><i class="mdi mdi-google-plus"></i> +RelativeGaming</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright light-blue darken-2">
        <div class="container">
          Made with <a class="link" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js"></script>    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>    <script src="lib/js/main.js"></script>
    <script>      $(document).ready(function(){        $(".button-collapse").sideNav();        $("ul.tabs").tabs();      });
    </script>
  </body>
</html>