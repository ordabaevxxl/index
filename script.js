const form = document.getElementById('form')
const password = document.getElementById('password')

form.addEventListener('submit', e=> {

	e.preventDefault();

	var firstName = fname.value.trim();
	var passwordVal = password.value.trim();
	var s_fname = document.getElementById('s-fname');
	var s_password = document.getElementById('s-password');

	if (firstName === ''){
		fname.classList.add('error');
		s_fname.innerHTML = "First Name cannot be empty";
		s_fname.classList.add('error-text');
	}
	else {
		fname.classList.remove('error');
		s_fname.classList.remove('error-text');
		fname.classList.add('success');
	}


	if (passwordVal === ''){
		password.classList.add('error');
		s_password.innerHTML = "Password cannot be empty";
		s_password.classList.add('error-text');
	}
	else {
		password.classList.remove('error');
		s_password.classList.remove('error-text');
		password.classList.add('success');
	}
})



