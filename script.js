//your JS code here. If required.
//your JS code here. If required.
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

openBtn.onclick = () =>{
modal.style.display = "block";
};
closeBtn.onclick = () =>{
modal.style.display = "none";
};
window.onclick = (event) => {
	if(event.target === modal){
		modal.style.display = "none";
	}
};