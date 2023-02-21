function handleCredentialResponse(response) {
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = decodeJwtResponse(response.credential);
  let fullname = document.getElementById("fullname")
  let first = document.getElementById("first")
  let last = document.getElementById("last")
  let mail = document.getElementById("email")
  let photo = document.getElementById("photo")
  let id_num = document.getElementById("id_num")
  let sign = document.getElementById("sign");
  let out = document.getElementById("out");
  let info = document.getElementById("info");
  let photo_link = responsePayload.picture;

  info.classList.remove("d-none");
  fullname.innerHTML = `${responsePayload.name}`;
  photo.src = photo_link;
  first.innerHTML = `${responsePayload.given_name}`;
  last.innerHTML = `${responsePayload.family_name}`;
  mail.innerHTML = `${responsePayload.email}`;
  id_num.innerHTML = `${responsePayload.sub}`;

  sign.classList.add("d-none");
  out.classList.remove("d-none");

}

function decodeJwtResponse(data) {
  let tokens = data.split(".");
  return JSON.parse(atob(tokens[1]))
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

out.addEventListener("click", signOut)


