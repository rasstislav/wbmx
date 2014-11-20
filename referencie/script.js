function displayCategory(elem,dur)
{
  if(elem.hasClass("active"))
    return false;

  $('div[data-category]').each(function() {
    $(this).css("display","none");
  });
  
  $(".sub-menu-item").removeClass("active");
  elem.addClass("active");

  $('div[data-category="'+elem.attr('data-category')+'"]').each(function() {
    $(this).fadeIn(dur);
  });

  return false;
}

$(document).ready(function()
{
  var splittedUrl = window.location.href.split("/");  

  var url = splittedUrl[splittedUrl.length-1];
  if(url==="")
    url = "web-stranky";
  else  
    url = url.substring(1);
      
  url = 'a[data-category='+url+']';
    
  displayCategory($(url),0);
  
  $(".sub-menu-item").click(function()
  {
     return displayCategory($(this),500);
  });
});

