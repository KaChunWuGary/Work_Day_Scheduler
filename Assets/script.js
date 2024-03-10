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
  var arr = [9,10,11,12,13,14,15,16,17];
  function apply_class(){
    var current_hour = dayjs().format("HH");
    var sliced_arr = arr.slice(current_hour-9,arr.length); 
    arr.splice(current_hour-9,arr.length);
    var present_class = sliced_arr.splice(0,1);
    var future_class = sliced_arr;
    var future_1st = sliced_arr.slice(0,1);
    console.log(future_1st);
    console.log(present_class);
    console.log(future_class.length);
    console.log(parseInt(present_class)+future_class.length);
    for (var i = 9; i < arr.length+9; i++){
      $("#hour-"+i).addClass("past");
    }
    for (var i = future_1st; i < parseInt(present_class)+future_class.length+1; i++){
      $("#hour-"+i).addClass("future");
    }
    $("#hour-"+present_class).addClass("present");
  }

  apply_class();
    


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM DD YYYY"));
});

