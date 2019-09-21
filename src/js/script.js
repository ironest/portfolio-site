var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {

    //this.classList.toggle("active");

    postContent = this.parentNode;

    postPreview = postContent.getElementsByClassName("postPreview")[0];
    postLong = postContent.getElementsByClassName("postLong")[0];

    if (postLong.style.maxHeight){
        postLong.style.maxHeight = null;
        this.innerHTML = "read more...";
    } else {
        postLong.style.maxHeight = postLong.scrollHeight + "px";
        this.innerHTML = "read less...";
    } 
  });
}