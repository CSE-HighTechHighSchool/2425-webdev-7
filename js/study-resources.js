$(function() {
    $('#container .scroll').mousewheel(function(evt, chg) {
        if(this.scrollLeft < 2461) {
            this.scrollLeft -= (chg * 100); //need a value to speed up the change
            //if (window.scrollY === 0) {
                evt.preventDefault();
            //}
          }
          if(this.scrollLeft >= 2461) {
            if(evt.originalEvent.wheelDelta /120 > 0) {
                if (window.scrollY === 0) {
                this.scrollLeft -= (chg * 100); //need a value to speed up the change
                }
            }
          }
    });
 });