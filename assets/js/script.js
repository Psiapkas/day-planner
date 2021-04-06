var currentTimeEl = $("#currentDay");
var saveButton = $("#saveButton");
var schedule9am = $("#schedule9am");
var schedule10am = $("#schedule10am");
var schedule11am = $("#schedule11am")
var schedule12pm = $("#schedule12pm")
var schedule1pm = $("#schedule1pm")
var schedule2pm = $("#schedule2pm")
var schedule3pm = $("#schedule3pm")
var schedule4pm = $("#schedule4pm")
var schedule5pm = $("#schedule5pm")
var mainSchedule = $("#mainSchedule")
var todayTime = moment().format("hh:mm:ss");
// controls main clock and updates background color of textbox in real time
function updateSchedueleTextBoxes() {
    var currentTime = moment();
    currentTimeEl.text(currentTime.format('MMM DD, YYYY [at] hh:mm:ss a'));


    setTextboxColor(schedule9am, moment(currentTime.format("YYYY-MM-DD") + " 09:00"),moment(currentTime.format("YYYY-MM-DD") + " 10:00"), currentTime);
    setTextboxColor(schedule10am, moment(currentTime.format("YYYY-MM-DD") + " 10:00"),moment(currentTime.format("YYYY-MM-DD") + " 11:00"), currentTime);
    setTextboxColor(schedule11am, moment(currentTime.format("YYYY-MM-DD") + " 11:00"),moment(currentTime.format("YYYY-MM-DD") + " 12:00"), currentTime);
    setTextboxColor(schedule12pm, moment(currentTime.format("YYYY-MM-DD") + " 12:00"),moment(currentTime.format("YYYY-MM-DD") + " 13:00"), currentTime);
    setTextboxColor(schedule1pm, moment(currentTime.format("YYYY-MM-DD") + " 13:00"),moment(currentTime.format("YYYY-MM-DD") + " 14:00"), currentTime);
    setTextboxColor(schedule2pm, moment(currentTime.format("YYYY-MM-DD") + " 14:00"),moment(currentTime.format("YYYY-MM-DD") + " 15:00"), currentTime);
    setTextboxColor(schedule3pm, moment(currentTime.format("YYYY-MM-DD") + " 15:00"),moment(currentTime.format("YYYY-MM-DD") + " 16:00"), currentTime);
    setTextboxColor(schedule4pm, moment(currentTime.format("YYYY-MM-DD") + " 16:00"),moment(currentTime.format("YYYY-MM-DD") + " 17:00"), currentTime);
    setTextboxColor(schedule5pm, moment(currentTime.format("YYYY-MM-DD") + " 17:00"),moment(currentTime.format("YYYY-MM-DD") + " 18:00"), currentTime);
    


    //  var start = moment(currentTime.format("YYYY-MM-DD") + " 09:00");
    //  var end = moment(currentTime.format("YYYY-MM-DD") + " 17:00");

    // if (currentTime.isBefore(start)){
    //  schedule9am.css("background-color","blue");
    // } 
    //  else if (currentTime.isAfter(end)){
    //  schedule9am.css("background-color","red");
    //  }
    //  else {
    //  schedule9am.css("background-color","green");
    //  }
  } 
setInterval(updateSchedueleTextBoxes, 1000);


 var daySchedule = [schedule9am, schedule10am, schedule11am, schedule12pm, schedule1pm, schedule2pm, schedule3pm, schedule4pm, schedule5pm]

// sets background color of textbox
function setTextboxColor (scheduleTextbox,start, end, currentTime ){

  if (currentTime.isBefore(start)){
    scheduleTextbox.css("background-color","blue");
  } 
   else if (currentTime.isAfter(end)){
    scheduleTextbox.css("background-color","red");
   }
   else {
    scheduleTextbox.css("background-color","green");
   }
 }

// saves data in text boxes
function saveSchedule(){
localStorage.setItem("dayActivities", Json.stringify(daySchedule));

}

function loadSchedule(){
  var dayActivities = JSON.parse(localStorage.getItem("dayActivities"));
  mainSchedule.children().closest("<ul>").textContent = dayActivities
}
saveButton.on("click", saveSchedule)
loadSchedule



