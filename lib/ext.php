<?php
  $lat = $_GET["lat"];
  $lon = $_GET["lon"];
  $url = "http://forecast.weather.gov/MapClick.php?lat=".$lat."&lon=".$lon."&FcstType=json";
  $agent = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_USERAGENT, $agent);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
  $content = curl_exec($ch);
  curl_close($ch);
  die($content);
?>
