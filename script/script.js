$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


	$("form").submit(function() { //Change Добавляем класс формы .callback
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change добавляем / (нужно добавить слеш, если брать с корня папку /mail.php)
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn(); // клас active и дисплей флекс выровнять по центру блока
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut(); // убераем клас active и прячем его
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
