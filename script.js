function openNav() {
    $("nav ul").show();
    $("#mobile-menu").hide();
	$("#nav-btn").attr("onclick", "closeNav()");
}

function closeNav() {
    $("nav ul").hide();
    $("#mobile-menu").show();
	$("#nav-btn").attr("onclick", "openNav()");
}