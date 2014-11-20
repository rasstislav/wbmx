<?php
$active = substr($_SERVER["REQUEST_URI"], 0, -1);
if(!empty($priecinok) && !empty($active))
  $active = str_replace("/".$priecinok,"",$active);
                    
$menu = <<<MENU
  <li class="left"><a href="/$priecinok/" class="polozka">Úvod</a></li>
  <li class="left"><a href="/$priecinok/referencie" class="polozka">Referencie</a></li>
  <li class="left"><a href="/$priecinok/o-nas" class="polozka">O nás</a></li>
  <li class="left"><a href="/$priecinok/sluzby" class="polozka">Služby</a></li>
  <li class="left"><a href="/$priecinok/kontakt" class="polozka">Kontakt</a></li>

MENU;
          
$lines = explode("\n", $menu);
$i=0;
if(empty($active))
  echo str_replace('<a h', '<a class="active" h', $lines[$i++]);
else
  $active =  explode("/",$active)[1];

for ($i; $i<count($lines); $i++)
{
    $line = $lines[$i];
    if(!empty($active))
    {
      if (strpos($line,$active) !== false)
          $line = str_replace('<a h', '<a class="active" h', $line);
    }
        
    echo $line;
}        
?>