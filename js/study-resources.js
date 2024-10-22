$(function() {
    $('#container .scroll').mousewheel(function(evt, chg) {
        var scrollval = document.getElementsByClassName("scroll")[0].scrollWidth;
        alert(this.scrollY);
        if(this.scrollLeft < scrollval) {
            this.scrollLeft -= (chg * 100); //need a value to speed up the change
            //if (window.scrollY === 0) {
                evt.preventDefault();
            //}
          }
          if(this.scrollLeft >= scrollval) {
            if(evt.originalEvent.wheelDelta /120 > 0) {
                if (window.scrollY === 0) {
                this.scrollLeft -= (chg * 100); //need a value to speed up the change
                }
            }
          }
    });
 });