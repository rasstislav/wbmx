$('body').removeClass('noScript');
$('body').addClass('script');

function showMenu() {
	var menu = document.getElementById("drop-down-menu");

	if(menu.style.display=="block")
		menu.style.display="";
	else
		menu.style.display="block";
}