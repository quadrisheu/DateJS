let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');

function dateAndTime() {
    let date = new Date();
    let dateOfDay = date.getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
     'Thursday', 'Friday', 'Saturday',]
    let hours = date.getHours();
    let meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours :  12;
    let min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    let sec = date.getSeconds();

    function leadingZero(time) {
        return time.toString().padStart(2, '0');
    }

    let timeOfDay = leadingZero(hours) + " " + meridian + " : " + leadingZero(min) + " : " + leadingZero(sec);
    
    let aye ='Today is : ' + days[dateOfDay];
    let awe = 'Current time is : ' + timeOfDay;

    
    first.innerHTML = aye;
    second.innerHTML = awe;
   
    setInterval(dateAndTime, 1000);
    

}


function doorWay() {
    window.print();
}


function currentDay() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    let todaysDate = month + "-" + day + "-" + year + ", " + month + "/" + day + "/" + year
                     + " or " +
                     day + "-" + month + "-" + year + ", " + day + "/" + month + "/" + year;

    third.innerHTML = todaysDate;
}