scrollingElement = (document.scrollingElement || document.body)

//Require jQuery
function scrollSmoothToBottom (id) {
   $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
   }, 500);
}
