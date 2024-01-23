console.log("hello"); //testing js file is linked to html.

//setting up variables linking html elements to JavaScript
const cookieNotice = document.getElementById("cookie-notice");
const acceptButton = document.getElementById("acceptBtn");
const declineButton = document.getElementById("declineBtn");

acceptButton.addEventListener("click", () => {
  //adds event. Waiting for a click on the button
  console.log("Accepted"); //logging to console
  cookieNotice.style.display = "none"; // cookie notice to disapear once event(click) has happened
  document.cookie = "cookiesAccepted=true"; // adding the accept cookie information
});

declineButton.addEventListener("click", () => {
  //adds event. Waiting for a click on the button
  console.log("Declined"); //logging to console
  cookieNotice.style.display = "none"; // cookie notice to disapear once event(click) has happened
  document.cookie = "cookiesAccepted=false"; // adding the decline cookie information
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (cookiesAccepted) {
  cookieNotice.style.display = "none";
}
