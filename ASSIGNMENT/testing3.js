const { addSession, listTodaysSessions, sessionCountdown,fetchStudyMaterials } = require("./task3");

addSession("Math",new Date("2025-01-05T10:00:00"),60)
addSession("Coding",new Date("2025-01-05T15:00:00"),90)
addSession("Playing",new Date("2025-01-06T10:00:00"),120)


console.log("Today's Session : ",listTodaysSessions())

sessionCountdown('Math', 5000);

fetchStudyMaterials('Coding')