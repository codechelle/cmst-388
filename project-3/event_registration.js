/*
		Your Name: Nichelle Hayes
		Last Modified Date: 12/13/2021
		File: event_registration.js
		File Description: Calculate totals, complete purchases, and countdown timer for customer's cart
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

//Timer
// Set time variables
var minutesTime = 10;
//Get 10 minutes from now
var stopTime = new Date(new Date().getTime() + minutesTime*60*1000).getTime(); 
// Update the count every second
var timer = setInterval(function() {
	var currentTime = new Date().getTime();

  	// Find the difference between now and the count down timee
  	var diff = stopTime - currentTime;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diff % (1000 * 60)) / 1000);

	// Display time with prepending zeros
	document.getElementById('timer').innerHTML = ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);

	if (diff <= 0) {
		clearInterval(timer);
		alert('Your time has now expired. This page will now reload.');
		location.reload(true);
	}
}, 1000);

window.onload = timer;

//Input error
function inputError(field) {
	// field.style.background = 'yellow';
	switch(field) {
		case 'numTickets':
			document.getElementById(field).style.background = 'yellow';
			break;
		case 'name':
			document.getElementById(field).style.background = 'cyan';			break;
		case 'email':
			document.getElementById(field).style.background = 'pink';			break;
		default:
			field.style.background = '#efefef';

	}
}		

//Calculate total
function calculateTotal() {
	var numTicketsField = document.getElementById('numTickets');
	var numTicketsValue = numTicketsField.value;

	if ((minTickets <= numTicketsValue) && (numTicketsValue <= maxTickets)) {
		document.getElementById('contactInformation').style.display = 'block';
		var totalPrice = (numTicketsValue*costPerTicket) + ticketSurcharge;

		document.getElementById('totalCost').value = '$' + totalPrice.toFixed(2);
	} else if (isNaN(numTicketsValue) || (numTicketsValue > maxTickets)) {
		document.getElementById('contactInformation').style.display = 'none';
		document.getElementById('msgTickets').innerText = 'You can only buy 1 to 3 tickets.'; 
		inputError('numTickets');
	}
}

//Complete purchase
function completePurchase() {
	var nameField = document.getElementById('name');
	var emailField = document.getElementById('email');
	var nameValue = nameField.value;
	var emailValue = emailField.value;
	var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var totalAmount = document.getElementById('totalCost').value;

	if(!(nameValue.length > 1)) {
		inputError('name');
		document.getElementById('msgname').innerText = 'You must submit a name with your tickets.';
	} else if(!((emailValue.length > 1) && (emailValue.match(emailPattern)))) {
		inputError('email');
		document.getElementById('msgemail').innerText = 'You must put in an email.';
	} else {
		alert('Thank you for purchase at the total amount of ' +  totalAmount);
		clearInterval(timer);
	}
}