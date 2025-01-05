const {sendReminder,getUpcomingAppointments,addAppointment} = require('./task1')

addAppointment("Mayank", new Date(Date.now() + 30 * 60 * 1000), "Consultation");
addAppointment("Sumit", new Date(Date.now() + 90 * 60 * 1000), "Follow-up"); 
addAppointment("Nihar", new Date(Date.now() + 15 * 60 * 1000), "Consultation"); 
// addAppointment("Invalid Client", "Invalid Date", "Consultation"); 

console.log("Upcoming Appointments (Next Hour):");
console.log(getUpcomingAppointments())

console.log("Setting reminders...");
sendReminder()