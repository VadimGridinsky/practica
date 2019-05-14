$(document).ready(function() {

	$("#osForm").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/form.php",
			data: $(this).serialize()
		}).done(function() {
			
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#osForm").trigger("reset");
		});
		return false;
	});
	
});