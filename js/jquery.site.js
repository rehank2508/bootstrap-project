$(document).ready(function() {

  $('[data-toggle="popover"]').popover({delay:500});   

  $('[data-toggle="tooltip"]').tooltip();

  $(document).ready(function(){
      $("#myModal").on("show.bs.modal", function(event){
          var button = $(event.relatedTarget);
      
            // Extract value from the custom data-* attribute
            var titleData = button.data("title");
            $(this).find(".modal-title").text(titleData);
          });
      });

  $("#fb-btn").button();
    $("#fb-btn").click(function () {
        $(this).button().addClass("btn-primary");
        $(this).button().css("background-color","#3b5998");
        $(this).button().css("color","white");
        $(this).button().css("border","none");
        $(this).prop('disabled', true);
    });

});
