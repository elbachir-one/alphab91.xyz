function showTab(id) {
	document.querySelectorAll(".tab-content").forEach(section => {
		section.classList.remove("active");
	});

	document.querySelectorAll(".tab").forEach(tab => {
		tab.classList.remove("active");
	});

	document.getElementById(id).classList.add("active");
	event.currentTarget.classList.add("active");
}
