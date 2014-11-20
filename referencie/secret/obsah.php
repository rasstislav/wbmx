  <div id="referencie">
    <div class="container">
      <div id="content">
        <script type="text/javascript" src="./script.js"></script>
             
        <article class="sub-content blok">
          <header class="nazov">
            <h2>
              <span class="left"><em class="cislo zelena">01. </em>Referencie</span>
              <span class="right">
                <a data-category="web-stranky" href="/<?php echo $priecinok;?>/referencie/web-stranky/" class="sub-menu-item left">WEB STRÁNKY</a>
                <a data-category="graficky-dizajn" href="/<?php echo $priecinok;?>/referencie/graficky-dizajn/" class="sub-menu-item left">GRAFICKÝ DIZAJN</a>
                <a data-category="logotypy" href="/<?php echo $priecinok;?>/referencie/logotypy/" class="sub-menu-item left">LOGOTYPY</a>                  
              </span>
            </h2>  
          </header>
          <?php

            include "./web-stranky/secret/web-stranky.html";
            include "./graficky-dizajn/secret/graficky-dizajn.html";
            include "./logotypy/secret/logotypy.html";

          ?>
        </article>
        
        <div id="ponuka" class="blok">
          Túžite sa ocitnúť medzi našimi referenciami? <a href="/<?php echo $priecinok;?>/o-nas/" class="zelena">Napíšte nám.</a>
        </div>

        <?php include "./secret/povedali.html"; ?>
      </div>
    </div>
  </div>