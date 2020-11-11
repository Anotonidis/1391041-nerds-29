const loginLink = document.querySelector(".write-us-button");
const modalOpen = document.querySelector(".modal-holder");
const modalClose = modalOpen.querySelector(".modal-close");
const loginForm = modalOpen.querySelector(".modal-form")
const loginName = modalOpen.querySelector(".name");
const loginMail = modalOpen.querySelector(".e-mail");

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

loginLink.addEventListener ("click", function (evt) {
	evt.preventDefault();
	modalOpen.classList.add("modal-show");

	if (storage) {
		loginMail.value = storage;
		loginName.focus();
	} else {
		loginName.focus();
	}

});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalOpen.classList.remove("modal-show");
	modalOpen.classList.remove("modal-error")
});

loginForm.addEventListener("submit", function (evt) {
	if (!loginName.value || !loginMail.value) {
	evt.preventDefault();
	modalOpen.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("login", loginName.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalOpen.classList.contains("modal-show")) {
			evt.preventDefault();
			modalOpen.classList.remove("modal-show");
			modalOpen.classList.remove("modal-error");
		}
	}
});