let timeDisplayArea = $("#currentDay")

let textInput = $(".storage")
let lsOutput = $(".container")
let saveButton = $(".saveButton")

//Main time display in hero - added as a funtion to add to setInterval in order to have seconds change
function displayTime () {
    let today = moment();
    timeDisplayArea.text(today.format("[Today is -] dddd, MMMM Do YYYY h:mm:ss a"));
}

//used parseInt to change time to a number in order to have the for loop work properly
let currentHour = parseInt(moment().format("H"));

//function to run the change of color for the time blocks
function colorChange() {
    let colorTimeblocks = $(".color")

    for (let i = 0; i<10; i++){
        let timeblockId = parseInt(colorTimeblocks[i].id) 
        if (timeblockId < currentHour) {
            $(colorTimeblocks[i]).addClass("past");                                 
        } else if(timeblockId === currentHour){
            $(colorTimeblocks[i]).addClass("present");
        }else if (timeblockId >= currentHour) {
            $(colorTimeblocks[i]).addClass("future");
        }else if (timeblockId > currentHour){
            $(colorTimeblocks[i]).addClass("past");
        }
}
}

colorChange();

//used to update the times
setInterval(function(){
    displayTime();
    colorChange();
}, 1000)



//function to store the information to localStorage
let input_textarea = $('.content-input');


saveButton.on('click', updateOutput);

input_textarea = localStorage.getItem("content", input_textarea.val());

function updateOutput() {
	localStorage.setItem('content', input_textarea);	
}