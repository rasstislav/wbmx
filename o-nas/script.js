var array = [];

var i;
for (i = 0; i < $(".citajViac").size(); i++)
  array.push($(".citajViacButton:eq("+i+")").text());

$(".citajViac").hide();

var index;
$(".citajViacButton").click(function()
{
  index = $(".citajViacButton").index($(this));
  
  if($(this).text()=="ZAVRIEŤ")
    $(this).text(array[index]);
  else
    $(this).text("ZAVRIEŤ");
  
  $(".citajViac:eq("+index+")").slideToggle(400);
  
  return false;
});