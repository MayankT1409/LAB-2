let appointment = []

function addAppointment(clientName, appointmentTime, serviceType) {
    try {
        if (!clientName || !(appointmentTime instanceof Date) || isNaN(appointmentTime)) {
            throw new Error("Invalid input: Ensure clientName is non-empty and appointmentTime is a valid Date object.");
        }

        appointment.push({ clientName, appointmentTime, serviceType });
        console.log(`Appointment added for ${clientName} at ${appointmentTime} for ${serviceType}.`);
    } catch (error) {
        console.error(error.message);
    }
}


function getUpcomingAppointments() {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

    return appointment.filter(appointment => 
        appointment.appointmentTime > now && appointment.appointmentTime <= oneHourLater
    );
}




function sendReminder() {
    const now = new Date();
    appointment.forEach(appt => {
        const timeToAppointment = appt.appointmentTime - now;
        if (timeToAppointment > 0) {
            setTimeout(() => {
                console.log(
                    `Reminder: ${appt.clientName}, your ${appt.serviceType} is scheduled at ${appt.appointmentTime}.`
                );
            }, timeToAppointment);
        }
    });
}



module.exports = {
    sendReminder,
    getUpcomingAppointments,
    addAppointment,
}

