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
throw new Error('No tickets available.');}
// Code meant to check if they are tickets are available 

displayTickets(data);
} catch (error) {
errorMessage.innerText = error.message;
errorMessage.style.display = 'block'; 
// Code meant to display the error message if an error was found.
} finally {
// Finally used to cleanup the code.
console.log('Fetch complete.'); }}
// Code meant to display message when fetch is complete and successful.
function displayTickets(tickets) {
const ticketContainer = document.getElementById('ticket-container');
tickets.forEach(ticket => {
const ticketDiv = document.createElement('div');
ticketDiv.innerHTML = `
<h3>Ticket ID: ${ticket.id}</h3>
<p>Customer Name (User ID): ${ticket.userId}</p>
<p>Issue Description: ${ticket.title}</p>
<p>Details: ${ticket.body}</p>
<hr>`;
ticketContainer.appendChild(ticketDiv);});}
// Code meant to display tickets and ticket details. 
fetchTickets();
// Code