const x = 5, y = 10;    // const cannot be changed later.
var toplam = x + y;
document.getElementById("toplam").innerHTML = toplam;   // accessed HTML codes with getElementById, replaced it with innerHTML.


const a = "5";
const b = "4";
const c = "3";
var d = a + b + c;
document.getElementById("d").innerHTML = d;


let list1 = [123456789, "Samet", "YILMAZ"]
list1.push("Cumhuriyet University") /* Added member to the end of the list */
list1.push(987654321)
list1.pop() /* Last member of the list removed */ 
list1.unshift("Sivas") /* Added member to the start of the list */
list1.shift() //The Sivas member is removed from list, it is on the first
document.getElementById("list1").innerHTML = list1;


let list2 = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
list2.splice(5,1) // The Foxtrot member is removed from list, it is on the fifth on the list and Golf is gonna be remain with the list
document.getElementById("list2").innerHTML = list2;
list2.forEach((item, index) => {
    console.log("item:" + item + " " + "sıra nurmaası: " + index)   // write item write value, write number write value.
})


let list3 = ["Tango", "Uniform", "Victor"]
let list4 = ["X-Ray", "Yankee", "Zulu"]
let list5 = list3.concat(list4);
list5.reverse() // list5 gonna be reverse sorted with this function
document.getElementById("list5").innerHTML = list5;
let list5index = list5.indexOf(2);  //i wanted to assign an element of list5 index 2 to list5index, and then i wanted to display it in html
document.getElementById("list5index").innerHTML = list5index;   // ERROR value -1


function showtime(){    // I used this source for this function: https://tecadmin.net/get-current-date-time-javascript/
    setInterval(() => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        console.log(dateTime)
        document.getElementById("showTimer").innerText = dateTime;
    }, 1000);   //  Every second(1000 ms) I took the year, month, day, hour, minute, second of the system and wrote it to the console and HTML p tag.
}

showtime();