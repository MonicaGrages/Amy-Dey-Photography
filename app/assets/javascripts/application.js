// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

$('document').ready(function(){
  var modal = (function(){
    var
    method = {},
    $overlay,
    $modal,
    $content,
    $close;

    // Append the HTML
    $overlay = $('<div id="overlay"></div>');
    $modal = $('<div id="modal"></div>');
    $content = $('<div id="content"></div>');
    $close = $('<i id="close" class="fa fa-times fa-3" aria-hidden="true"></i><');

    $modal.hide();
    $overlay.hide();
    $modal.append($content, $close);

    $(document).ready(function(){
      $('body').append($overlay, $modal);
    });

    // Center the modal in the viewport
    method.center = function () {
      var top, left;

      top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
      left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

      $modal.css({
        top:top + $(window).scrollTop(),
        left:left + $(window).scrollLeft()
      });
    };

    // Open the modal
    method.open = function (settings) {
      $content.empty().append(settings.content);

      method.center();

      $(window).bind('resize.modal', method.center);

      $modal.show();
      $overlay.show();
    };

    // Close the modal
    method.close = function () {
      $modal.hide();
      $overlay.hide();
      $content.empty();
      $(window).unbind('resize.modal');
    };

    $close.click(function(e){
      e.preventDefault();
      method.close();
    });

    return method;
  }());

  function openModal() {
    var background = $(event.target).css('background-image');
    var image_url = background.replace('url(','').replace(')','').replace(/\"/gi, "");
    modal.open({content: $(`<img src='${image_url}' class='modal-photo'></img>`)});
  }

  $('.gallery-photo').click(event, openModal);
})
