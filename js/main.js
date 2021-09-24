$(document).ready(function() {
	$('.accordion').find('.accordion-toggle').click(function() {
		$(this).next().slideToggle('600');
		$(".accordion-content").not($(this).next()).slideUp('600');
	});
	$('.accordion-toggle').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


$(document).ready(function(){
	$(".timeCs1").click(function(){
		$(".timeCs1").removeClass("active-time1");
		$(this).addClass("active-time1");
			});
});

$(document).ready(function(){
	$(".timeCs2").click(function(){
		$(".timeCs2").removeClass("active-time2");
		$(this).addClass("active-time2");
			});
});

$(document).ready(function(){
	$(".timeCs3").click(function(){
		$(".timeCs3").removeClass("active-time3");
		$(this).addClass("active-time3");
			});
});

$(document).ready(function(){
	$(".timeCs4").click(function(){
		$(".timeCs4").removeClass("active-time4");
		$(this).addClass("active-time4");
			});
});
