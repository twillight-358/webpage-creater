$(function(){
  $('.btn-first').on('click', function(){
          var targetTop = $('.third-contents').offset().top - 100;
          $('html,body').animate({
              scrollTop: targetTop
          }, 500);
          return false;
      });

  $('.btn-second').on('click', function(){
          var targetTop = $('.second-contents').offset().top - 100;
          $('html,body').animate({
              scrollTop: targetTop
          }, 500);
          return false;
      });

  $('.btn-third').on('click', function(){
          var targetTop = $('.first-contents').offset().top - 100;
          $('html,body').animate({
              scrollTop: targetTop
          }, 500);
          return false;
      });

  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0}, 500);
    return false;
  });

});
