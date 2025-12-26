function bookEvent(eventName){
localStorage.setItem("eventName",eventName);
window.location.href="booking.html";
}
function confirmBooking(){
alert("Booking Confirmed 🎉");
}