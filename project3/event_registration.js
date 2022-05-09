/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;
 
const ticketInput = document.getElementById('numTickets');

var totalCost = document.getElementById('totalCost');

/*** YOUR CODE STARTS BELOW HERE ***/


//CALCULATE the cost for sum of tickets 1-3 

 function calculateTotal(){
	let ticketNum = document.getElementById('numTickets');
if (isNaN(ticketNum.value)){
	document.getElementById('msgTickets').innerText = 'Please enter a number'
	document.getElementById('totalCost').value = 'Error';
	

	warning(ticketNum);
	return
}
	else if (ticketNum.value > 3 || ticketNum.value < 1) {
console.log(ticketNum.value);
document.getElementById('msgTickets').innerText = 'Please enter an amount between 1 and 3';
document.getElementById('totalCost').value = 'Error';
 warning(ticketNum);
 return

	}
else{
console.log(ticketNum.value)
let costOfTicket = ticketNum.value * costPerTicket + (ticketNum.value * .5);
document.getElementById('msgTickets').innerText = ''

document.getElementById('totalCost').value =  formatter.format(costOfTicket);
var contactInfo = document.getElementById('contactInformation');
contactInfo.style.display = 'block';
success(ticketNum)
}
}

function resetForm(){
window.location.reload();
}
//show checkout once ticket info has been validated

var formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
  

  });

  function startTimer(duration, display) {


    var timer = duration, minutes, seconds;
	
   countdownTimer =  setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
		//console.log(timer)

        if (--timer < 0) {
            alert('The timer has expired! Try to purchase again');
			clearInterval(countdownTimer);
			window.location.reload();
        }
    }, 1000);


}



//validate ticket information

function completePurchase(){

	//validate name and email 
//svar emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	var msgName = document.getElementById('msgname');
	var msgEmail = document.getElementById('msgemail');
console.log(name.value);
console.log(email.value);
	if (name.value == '' || name.value == 'null' ){
msgName.innerText = 'Please enter a name';
warning(name)
return;
	}

	else if(!onlyLetters(name.value)){
		msgName.innerText = 'Please enter valid characterss'
		warning(name)
		return;
	}
else{
	msgName.innerText='';
	success(name)
}
	if (email.value == '' || email.value == 'null'){
		msgEmail.innerText = 'Please Enter a valid Email';
		warning(email)
		return;
	}

	else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
		msgEmail.innerText = 'Email Address needs @ or .(com,org,etc.) to be valid';
		warning(email)
		return;
	}

else{
msgEmail.innerText='';
success(email)
}


alert('Success! Thank you for your purchase');

clearInterval(countdownTimer)
}

function onlyLetters(str) {
	return /^[a-zA-Z\s]+$/.test(str);
  }

function warning(formVar){
formVar.style.backgroundColor = 'yellow';
}

function success(formVar){
	formVar.style.backgroundColor = 'green';
	}
	

window.onload = function () {
    var tenMinutes = 60 * 10,
        display = document.getElementById('timer');
    startTimer(tenMinutes, display);
  
};