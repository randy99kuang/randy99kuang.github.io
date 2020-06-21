'use strict'
console.log('Here\'s a hidden message');

// Inserting Date on the webpage
let today = new Date();
// let formatDate = today.toDateString();
let formatDate = today; 
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;
