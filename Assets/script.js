// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function save_button(element){
    var save_text = $(element).prev(".description").val();
    var key_storage = $(element).parent().attr("id") + "-text";
    localStorage.setItem(key_storage,save_text);
  };
  $("#hour-9 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-10 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-11 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-12 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-13 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-14 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-15 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-16 .btn").on("click", function(){
    save_button(this);
  });
  $("#hour-17 .btn").on("click", function(){
    save_button(this);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? (HH = 24 hr format) dayjs().format("HH")
  



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM DD YYYY"));
});
