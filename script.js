function formSubmit(){	
	//stop form from submitting
  event.preventDefault();
  //hide form
	var form=document.getElementById("form");
	form.style.display="none";	
	//get data from form
	var name = document.getElementById("formName").value;
	var email = document.getElementById("formEmail").value;
	//insert data into paragraph
	document.getElementById("name").innerHTML=name;
	document.getElementById("email").innerHTML=email;
	//show the paragraph
	var p=document.getElementById("show");
	p.style.display="block";
}

