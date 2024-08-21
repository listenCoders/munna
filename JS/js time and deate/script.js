const now = new Date();

// Extracting the date and time components
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-based
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Formatting the date and time
const formattedDate = `${year}/${month}/${date}`;
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// Displaying the date and time
dom.innerHTML = `<h1>${date}</h1>`;
