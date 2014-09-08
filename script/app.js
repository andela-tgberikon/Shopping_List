var shop = {
  start: function() {
    $("#shop-list").hide();//Hide initial wish list until an item is added before it shown "Line 18"
    $("#complete-list").hide();//Only after Items have been fulfilled and fulfil button clicked would it show "Line 24"
    $("#completed_items").hide();
    $("#add_to_list").click(shop.addToList);
    $("#completed_items").click(shop.addCompleted);
    $("#clear-fulfilled").click(shop.clearFulfilled);
  },
  addToList: function() {
    // Get items atleast 2 characters long from textbox and append to Wish List section
    if($.trim($("#search_bar").val()).length < 2 ) {
      alert("please Enter atleast two character words");
    } else {
      var value = $("#search_bar").val();
      var new_item = $("<li>" + "<input type=\"checkbox\" value=\"" + value + "\">" + value + "</li>");
      new_item.appendTo("#wish_list");
      $("#shop-list").show();
    }
    // Clear item from the searchbar ready for the next input
    $("#search_bar").val("");
    $("#wish_list").sortable(); //To easily reorder items in the list by click and drag
    $("#completed_items").show();
  },
  addCompleted: function() {
    //Append items to the fulfilled list when fulfiled button is clicked
    var items = $("#shop-list input:checked").parent();
    items.appendTo("#complete").slideDown();
    $("#complete-list").show();
    
  },
  clearFulfilled: function() {
    var items = $("#complete-list input:checked").parent();
    items.slideUp(function() {
      $(this).remove();
    });
  }
}

$(document).ready(shop.start);






/*
// Select/Deselect all when button is clicked
function handleToggleAllClick() {
    var inputs = $("#shopping_list input[type=checkbox]");
    if ($(this).val() == "Select all") {
        inputs = inputs.filter(":not(:checked)");
    } else {
        inputs = inputs.filter(":checked");
    }
    inputs.click();
}*/