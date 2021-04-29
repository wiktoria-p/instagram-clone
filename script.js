
let heart = document.getElementById("1");
heart.addEventListener("click", likePost);

let photo = document.getElementById("2");
photo.addEventListener("dblclick", likePost);

function  likePost(){
  heart.classList.toggle("liked");
}

let profilePhoto = document.getElementById("3");


function clickProfile(){
  console.log("jest")
  let shortProfile = document.getElementById("4");
  shortProfile.classList.toggle("active");
  shortProfile.classList.toggle("shortcut");
}

profilePhoto.addEventListener("click", clickProfile);