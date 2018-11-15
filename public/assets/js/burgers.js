// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("submit", function(event) {
    event.preventDefault()
    var id = $(this).data("id");
    // var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      // console.log("changed to devoured", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    // var id = $(this).data("id");

    var newBurger = {
      burger_name: $("#bg")
        .val()
        .trim(),
      // devoured: false
    };
    console.log(newBurger.burger_name);

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete").on("click", function(event) {
  
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/"+ id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
