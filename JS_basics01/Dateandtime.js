let mydate = new Date ();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString());

let mycreatedDate = new Date (2025, 0, 11); //user created Date in YYYY, MM, DD format. **Month is Started from 0 instead of 1.
console.log(mycreatedDate.toLocaleString());

let MycreatedDatetime = new Date (2025, 6, 26, 9, 5); //Added Time Stamp in HH,MM,SS format
console.log(MycreatedDatetime.toLocaleString());

let MyDate = new Date ("2025-01-26"); // Another syntax to specify date and time. YYYY-MM-DD
console.log(MyDate.toLocaleString());

let MynewDate = new Date ("11-08-2025"); // In DD-MM-YYYY format
console.log(MynewDate.toLocaleString());


let MytimeStamp = Date.now();
console.log(MytimeStamp); //It gives time from 1st Jan 1970 to present time in Milliseconds

console.log(MynewDate.getTime());

console.log(Math.floor(MytimeStamp/1000)); //converting from Miliseconds to seconds


let newDate = new Date ();
console.log(newDate.getMonth()); //returns the current month