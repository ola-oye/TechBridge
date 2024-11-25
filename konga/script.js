const timer = document.querySelectorAll(".timer");

const targetDate = new Date(); // Set the target date
targetDate.setDate(targetDate.getDate() + 6); // Adds 6 days

// Update the countdown every second
setInterval(function () {
  const now = new Date();
  const diff = targetDate - now; // Difference in milliseconds

  if (diff <= 0) {
    timer.forEach((element) => {
        element.innerText = "Time's up!";
        return;
    })
  }
  

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(diff / (3600000 * 24));
  const hours = Math.floor((diff % (3600000 * 24)) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  // Display the formatted countdown
  timer.forEach((element) => {
    element.innerText = `${days}days - ${hours}hrs ${minutes}mins ${seconds}secs`;
  });
}, 1000);
