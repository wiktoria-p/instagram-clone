
let heart = document.getElementById("1");
heart.addEventListener("click", likePost);

let photo = document.getElementById("2");
photo.addEventListener("dblclick", likePost);

function  likePost(){
  heart.classList.toggle("liked");
}