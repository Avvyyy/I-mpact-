$("#signInButton").on("click", (e) => {
	e.preventDefault();

	fullName = $("#lastName").val() + $("#firstName").val();
	email = $("#inputEmail").val();
	password = $("#inputPassword").val();
	linkedInHandle = $("#linkedIn").val();
	isActiveSocialImpact = $("#isActiveSocialImpact").val();
	
	createUserWithEmailAndPassword(auth, email, password, fullName, linkedInHandle, isActiveSocialImpact)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
		alert("User created successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
		alert(errorMessage);
    // ..
  });
})
