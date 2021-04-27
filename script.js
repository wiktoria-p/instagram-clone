
let heart = document.getElementById("1");
heart.addEventListener("click", likePost);

let photo = document.getElementById("2");
photo.addEventListener("dblclick", likePost);

function  likePost(){
  if ( heart.style.color=="black" ) {
    heart.style.color="red";
  } else {
    heart.style.color="black";
  }
}