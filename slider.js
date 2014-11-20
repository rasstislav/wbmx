var slider = document.getElementById("slider");
slider.style.position = "relative";

var slides = slider.getElementsByClassName("slide");
var pocet = slides.length;

function posunSlideDalsi(stary,aktualny,novy,rychlost)
{
  $(stary).fadeOut(rychlost,"swing");

  $(stary).promise().done(function()
  {
    $(stary).removeAttr('id');
    $(aktualny).attr('id','slide-prioritny');
    $(novy).attr('id','slide-nasledujuci');

    stary.style.display = "";

    done=true;
  });
}

function posunSlidePredosli(stary,aktualny,novy)
{
  $(stary).fadeOut(500,"swing");

  $(stary).promise().done(function()
  {
    $(stary).attr('id','slide-nasledujuci');
    $(aktualny).attr('id','slide-prioritny');

    stary.style.display = "";

    done=true;
  });
}

var timer = function()
{
  if (!$(slider).is(':hover'))
    $('#nasledujuci').trigger('click');
};

var index = 0;
var aktind = 0;
var znova = false;
var cas = 5000;
var interval;
var done = true;

var obrazok = slides[index].getElementsByTagName("img")[0];
if($(slides[index].getElementsByClassName("slide-obrazok")[0]).css("float")!="left")
  interval = setInterval(timer,cas);

$('#nasledujuci').click(function()
{
  if(done==true)
  {
    done = false;

    index++;
    if(index==pocet)
      index = 0;

    aktind = index;

    var aktualny = slides[aktind];

    var novy;
    if(aktind+1==pocet)
      novy = slides[0];
    else
      novy = slides[aktind+1];

    var stary;
    if(aktind-1==-1)
      stary = slides[pocet-1];
    else
      stary = slides[aktind-1];

    posunSlideDalsi(stary, aktualny, novy, 500);
    clearInterval(interval);

    if($(slides[index].getElementsByClassName("slide-obrazok")[0]).css("float")!="left")
      interval = setInterval(timer,cas);
  }
});

$('#predchadzajuci').on('click', function()
{
  if(done==true)
  {
    done = false;

    index--;
    if(index==-1)
      index = pocet-1;

    aktind = index;

    var aktualny = slides[aktind];

    $(aktualny).attr('id','slide-nasledujuci');

    var novy;
    if(aktind-1==-1)
      novy = slides[pocet-1];
    else
      novy = slides[aktind-1];

    $(novy).removeAttr('id');

    var stary;
    if(aktind+1==pocet)
      stary = slides[0];
    else
      stary = slides[aktind+1];

    posunSlidePredosli(stary, aktualny, novy);
    clearInterval(interval);

    if($(slides[index].getElementsByClassName("slide-obrazok")[0]).css("float")!="left")
      interval = setInterval(timer,cas);
  }
});

$(window).resize(function()
{
  obrazok = slides[index].getElementsByTagName("img")[0];

  if($(slides[index].getElementsByClassName("slide-obrazok")[0]).css("float")=="left")
  {
    posunSlideDalsi(slides[index+1==pocet ? index : index+1], slides[index=0],slides[1], 0);
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

document.getElementById("predchadzajuci").style.display = "block";
document.getElementById("nasledujuci").style.display = "block";