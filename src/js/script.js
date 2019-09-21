var coll = document.getElementsByClassName("collapsible");

  var i;

  for (i = 0; i < coll.length; i++) {
    console.log("Dentro");
    coll[i].addEventListener("click", function() {

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

ScrollReveal().reveal('.row', {
    delay: 200,
    interval: 400,
    distance: '20px',
    origin: 'bottom',
    easing: 'ease-out',
});

ScrollReveal().reveal('.projComponent', {
    delay: 200,
    interval: 400,
    distance: '20px',
    origin: 'bottom',
    easing: 'ease-out',
});

ScrollReveal().reveal('.postComponent', {
    delay: 200,
    interval: 400,
    distance: '20px',
    origin: 'bottom',
    easing: 'ease-out',
});
