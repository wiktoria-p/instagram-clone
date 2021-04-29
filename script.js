// all hearts list
let hearts = document.getElementsByClassName("heart")

for (let heart of hearts){
  heart.addEventListener("click", likePost)
}

// all photos list
let photos = document.getElementsByClassName("photo")
for (let photo of photos){
  photo.addEventListener("dblclick", likePost)
}

// like posts function
function  likePost(){
  this.parentElement.querySelector(".heart").classList.toggle("liked")
}

// profile shortcut
let profilePhoto = document.getElementById("profile")

function clickProfile(){
  let shortProfile = document.getElementById("shortcut")
  shortProfile.classList.toggle("active")
  shortProfile.classList.toggle("shortcut")
}

profilePhoto.addEventListener("click", clickProfile)