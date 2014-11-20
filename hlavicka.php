<?php include "prem.php"; ?>
<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Tvorba web stránok Žilina | Webmax, s.r.o.</title>
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="/<?php echo $priecinok ?>/style.css" type="text/css">
  <link rel="stylesheet" href="/<?php echo $priecinok ?>/menu.css" type="text/css">
  <link rel="stylesheet" href="/<?php echo $priecinok ?>/slider.css" type="text/css">
  <link rel="stylesheet" href="/<?php echo $priecinok ?>/media.css" type="text/css">
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.6.min.js"></script>
  <script type="text/javascript" src="/<?php echo $priecinok ?>/jquery.reveal.js" ></script>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.js"></script>
  <link href='http://fnt.webink.com/wfs/webink.css/?project=B97B3E4A-5871-4917-83DD-7E616C17A13D&fonts=1421BCAA-4D56-EF9D-A008-8F0EFD21830C:f=MyriadPro-Bold,4BBF232E-7B7E-89A8-845B-0D0C2E0B0CBA:f=KyrialSansProUltLightCond,BC69D162-0FA2-815E-041A-BC6F97BF4621:f=KyrialSansProLightCond,D2D73E09-9971-3D18-7093-353BAD67D4B2:f=KyrialSansProRegular,73E6C83D-7F13-A8AE-4770-C315AE5061C3:f=MyriadPro-Regular' rel='stylesheet' type='text/css'>
</head>
<body class="noScript">
  <div id="wrapper">
    <div class="container">
      <div id="header" class="blok clearfix">
        <div id="logo" class="left">
          <a href="/<?php echo $priecinok ?>" class="a-img">
            <img src="http://webmax.sk/themes/webmax/images/logo.png" alt="Webmax, s.r.o.">
            <span>Webmax, s.r.o.</span>
          </a>
        </div>
        <nav id="menu-hlavne" class="menu right">
          <ul>
            <li id="drop"><a href="javascript:showMenu()"><span class="zelena">MENU</span></a>
              <ul id="drop-down-menu" class="right">
                <?php include "menu.php"; ?>
              </ul>
            </li>
          </ul>
          <script type="text/javascript" src="/<?php echo $priecinok ?>/menu.js"></script>
        </nav>
      </div>
    </div>