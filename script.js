function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    let name = document.getElementsByClassName("name")
    let id = document.getElementsByClassName("id")
    let mail = document.getElementsByClassName("mail")
    let img = document.getElementsByClassName("img")

    name.innerHTML= `Name: ${profile.getName()}`
    id.innerHTML= `ID: ${profile.getId()}`
    mail.innerHTML= `Email: ${profile.getEmail()}`

    img.src= `${profile.get()}`

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
