$(function () {
	const form = $('#form');
	const answer = $('#answer');
	
	form.validate({
	  rules: {
		 name: { required: true },
		 email: { required: true, email: true },
		 message: { required: true }
	  },
	  messages: {
		 name: { required: 'Поле не может быть пустым' },
		 email: { required: 'Введите email', email: 'Отсутствует символ @' },
		 message: { required: 'Поле не может быть пустым' }
	  },
	  submitHandler: ajaxFormSubmit
	});
 
	function ajaxFormSubmit() {
	  const string = form.serialize();
 
	  $.ajax({
		 type: 'POST',
		 url: '/php/mail.php',
		 data: string,
		 success: function (html) {
			form.slideUp(800);
			answer.html(html);
		 }
	  });
 
	  return false;
	}
 });