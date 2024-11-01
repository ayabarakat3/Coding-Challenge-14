// Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
const apiURL = 'https://jsonplaceholder.typicode.com/posts';
const ticketContainer = document.getElementById('ticket-container');
const errorMessage = document.getElementById('error-message');
try {
let response = await fetch(apiURL);
if (!response.ok) {
throw new Error('Failed to fetch tickets. Status: ' + response.status);}
const data = await response.json();
// Waiting to see if response shows that everything is ok. 
if (data.length === 0) {
throw new Error('No unresolved tickets available.');}
// Code meant to check if they are tickets are available 


}};