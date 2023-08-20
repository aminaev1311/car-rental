let now = new Date();
// let utcString = now.toISOString().substring(0,19);
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
// let second = now.getSeconds();
export let localDatetimeToday = year + "-" +
                  (month < 10 ? "0" + month.toString() : month) + "-" +
                  (day < 10 ? "0" + day.toString() : day) + "T" +
                  (hour < 10 ? "0" + hour.toString() : hour) + ":" +
                  (minute < 10 ? "0" + minute.toString() : minute);

day = day + 1;

export let localDatetimeTommorow = year + "-" +
    (month < 10 ? "0" + month.toString() : month) + "-" +
    (day < 10 ? "0" + day.toString() : day) + "T" +
    (hour < 10 ? "0" + hour.toString() : hour) + ":" +
    "00";

day = day + 2;
// var localDatetimePlusThreeDays = year + "-" +
//                   (month < 10 ? "0" + month.toString() : month) + "-" +
//                   (day < 10 ? "0" + day.toString() : day) + "T" +
//                   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
//                   (minute < 10 ? "0" + minute.toString() : minute);

export let localDatetimePlusThreeDays = year + "-" +
    (month < 10 ? "0" + month.toString() : month) + "-" +
    (day < 10 ? "0" + day.toString() : day) + "T" +
    (hour < 10 ? "0" + hour.toString() : hour) + ":" +
    "00";

export function calculateDiffInDaysBetweenDates(returnDate, pickupDate) {
    return (new Date(returnDate)-new Date(pickupDate))/(1000*24*3600);
}
    
    