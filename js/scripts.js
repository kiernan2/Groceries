$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let input = [];
    input.push($("input#item-1").val());
    input.push($("input#item-2").val());
    input.push($("input#item-3").val());
    input.push($("input#item-4").val());
    input.push($("input#item-5").val());
  
    input.sort();

    input.forEach(function(element) {
      $("#list").append(element);
      $("#list").append(", ");
    });
    $("#formOne").hide();
    $("#output").show();
  });
});