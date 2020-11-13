function mySubmit() {
	alert("Thank You");
}

function changeColor() {
	var x = document.getElementById("my-job");
	if(x.style.color == "red") {
		x.style.color = "green"
	} else if(x.style.color == "green") {
		x.style.color = "blue";
	} else if(x.style.color == "blue") {
		x.style.color = "gold";
	} else {
		x.style.color = "red";
	}
}

function changeText() {
	var x = document.getElementById("my-job");
	if(x.innerHTML == "Programmer") {
		x.innerHTML = "Web Developer";
	} else if(x.innerHTML == "Web Developer") {
		x.innerHTML = "Freelancer";
	} else if(x.innerHTML == "Freelancer") {
		x.innerHTML = "Blogger";
	} else if(x.innerHTML == "Blogger") {
		x.innerHTML = "Gamer";
	} else if(x.innerHTML == "Gamer") {
		x.innerHTML = "Youtuber";
	} else {
		x.innerHTML = "Programmer";
	}
}