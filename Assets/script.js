// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //listener event for the save button, also puts it into local storage. 
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

//applies styles 
  var arr = [9,10,11,12,13,14,15,16,17];
  function apply_class(){
    //gets current hour
    var current_hour = dayjs().format("HH");
    //takes current hour + all numbers after it out of a premade array
    var sliced_arr = arr.slice(current_hour-9,arr.length); 
    //the next 3 splitting the numbers into 3 groups, past (all numbers before current hour), present(current hour), and future(all numbers after current hour)
    arr.splice(current_hour-9,arr.length);
    var present_class = sliced_arr.splice(0,1);
    var future_class = sliced_arr;
    //applies past css style
    for (var i = 9; i < arr.length+9; i++){
      $("#hour-"+i).addClass("past");
    }
    //applies future css style
    //needed to parseInt because js cant add an array with 1 number + another integer correctly
    var future_1st = sliced_arr.slice(0,1);
    for (var i = future_1st; i < parseInt(future_1st)+future_class.length; i++){
      $("#hour-"+i).addClass("future");
    }
    //apples present css style
    $("#hour-"+present_class).addClass("present");
  }
  apply_class();
  // gets data from local storage and puts it into corresponding areas
  for (var i = 9; i < 18; i++){
    var get_storage = localStorage.getItem("hour-"+i+"-text");
    $("#hour-"+i).children(".description").val(get_storage);
  }

  // displays the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM DD YYYY"));
});
