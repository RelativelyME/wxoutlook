<?php
    $_zip = $_GET["zip"];
    $zip = $_zip.".js";
    $url = "http://wxdata.weather.com/wxdata/mobile/mobagg/".$zip."?key=97ce49e2-cf1b-11e0-94e9-001d092f59fc";
    $agent = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERAGENT, $agent);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
    $content = curl_exec($ch);
    curl_close($ch);
    die($content);
?>