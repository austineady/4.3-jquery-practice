(function(){
  'use strict';

  var keys = $('li');
  var modifiedKeys = [];
  var caps = false;
  var shift = false;
  // var numberKeys = keys.filter('.number');
  // var keyNumber = numberKeys.html();

  $(document).ready(function(){
    functionRing();
  });

  function functionRing() {
    //one function to rule them all
    $('.keys').on('click', function(event) {
      modifiedKeys.push((($(this).html())));
      $('.displaytextspan').html(modifiedKeys);
      shift = false;
      shiftPressed();
    });
    $('.delete').on('click', function(event) {
      var deleteValue = modifiedKeys.pop();
      $('.displaytextspan').html(modifiedKeys);
      shift = false;
      shiftPressed();
    });
    $('.tab').on('click', function(event) {
      modifiedKeys.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
      $('.displaytextspan').html(modifiedKeys);
      shift = false;
      shiftPressed();
    });
    $('.shift').on('click', function(event) {
      shift = !shift;
      shiftPressed();

    });
    $('.caps').on('click', function(event) {
      caps = !caps;
      capsPressed();
    });
    $('.spacebar').on('click', function(event) {
      modifiedKeys.push("&nbsp;");
      $('.displaytextspan').html(modifiedKeys);
    });

    function shiftPressed(event) {
      if (shift === true) {
        $('.tilda').html("~");
        $('.colon').html(":");
        $('.forslash').html("?");
        $('.leftbracket').html("{");
        $('.rightbracket').html("}");
        $('.period').html(">");
        $('.comma').html("<");
        $('.letter').each(function(index) {
          $(this).html($(this).html().toUpperCase());
        });
      }
      if (shift === false && caps === false) {
          $('.tilda').html("`");
          $('.colon').html(";");
          $('.forslash').html("/");
          $('.leftbracket').html("[");
          $('.rightbracket').html("]");
          $('.period').html(".");
          $('.comma').html(",");
          $('.letter').each(function(index) {
            $(this).html($(this).html().toLowerCase());
          });
      }
}

  function capsPressed(event) {
    if(caps === true) {
      $('.letter').each(function(index) {
        $(this).html($(this).html().toUpperCase());
      });
    }
    if(caps === false) {
      $('.letter').each(function(index) {
        $(this).html($(this).html().toLowerCase());
      });
    }
  }

  window.on('keyup', function(event) {
    if (event.defultPrevented) {
      return;
    }

  switch (event.key) {
    case "spacebar":
    modifiedKeys.push("&nbsp;");
    $('.displaytextspan').html(modifiedKeys);
    break;
  }

  event.preventDefault();
}, true);


}


})();
