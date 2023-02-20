(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  $('.select__one').niceSelect();
  $('.select__Two').niceSelect();
  $('.select__Three').niceSelect();
  $('.select__Four').niceSelect();
  $('.select__Five').niceSelect();
  $('.select__Six').niceSelect();
  $('.select__Seven').niceSelect();
  $('.select__Eight').niceSelect();
  // $('.select__one').niceSelect();

  
  var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
    removeItemButton: true,
    maxItemCount:20,
    searchResultLimit:5,
    renderChoiceLimit:5
  }); 

  const calendar = new VanillaCalendar('#calendar');
  calendar.init();
  $('.cal_btn').click(function() {
      $('.Test_info_cal').toggleClass('show_cal').fadeIn()
      // $('.Test_info_cal').toggleClass('show_cal')
  })
})(jQuery);
