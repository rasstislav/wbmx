function posunSlide(stary,novy,rychlost)
{
  $(stary).fadeOut(rychlost,"swing");
  $(novy).fadeIn(rychlost,"swing");
}

var timer = function()
{
  if (!$(slider).is(':hover'))
    posunSlide(slides[index], slides[++index==pocet ? index=0 : index],700);
};

var slider = document.getElementById("slider");
slider.style.position = "relative";
slider.style.overflow = "hidden";

var slides = slider.getElementsByClassName("slide");
var pocet = slides.length;

document.getElementById("predchadzajuci").style.display = "block";
document.getElementById("nasledujuci").style.display = "block";

var index = 0;
var znova = false;
var i;
for (i = 0; i < pocet; i++)
  slides[i].style.position = "absolute";

var cas = 5000;
var interval;

var obrazok = slides[index].getElementsByTagName("img")[0];
if($(slides[index].getElementsByClassName("slide-obrazok")[0]).css("float")!="left")
  interval = setInterval(timer,cas);

$(document).on('click', '#predchadzajuci', function () {
  posunSlide(slides[index], slides[--index==-1 ? index=pocet-1 : index],700);
  clearInterval(interval);
  interval = setInterval(timer,cas);
});

$(document).on('click', '#nasledujuci', function () {
  posunSlide(slides[index], slides[++index==pocet ? index=0 : index],700);
  clearInterval(interval);
  interval = setInterval(timer,cas);
});

$(window).resize(function()
{
  obrazok = slides[index].getElementsByTagName("img")[0];

  if($(slides[index].getElementsByClassName("slide-obrazok")[0]).css("float")=="left")
  {
    posunSlide(slides[index], slides[index=0],0);
    clearInterval(interval);
    znova = true;
  }
  else
  {
    if(znova)
    {
      interval = setInterval(timer,cas);
      znova = false;
    }
  }
});
