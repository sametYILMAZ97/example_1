const equipment = new Map([    // i created it with new Map();.
    ["mouse", "Logitech"],
    ["keyboard", "HyperX"],
    ["headphone", "HyperX"],
    ["controller", "Xbox"],
    ["battery", "Duracell"],
    ["powersupply", "Corsair"],
]);

equipment.delete("powersupply");    // delete the selected one, clear deletes them all.
document.getElementById("power1").innerHTML = " Is it true?" + " " + equipment.has("powersupply");

equipment.get("mouse"); //  Gets the value for a key in a Map
equipment.get("keyboard");
equipment.get("battery");
document.getElementById("mouse").innerHTML = equipment.get("mouse");    //  mouse key'inin değerini id'si mouse olan html tagıma yazdım.
document.getElementById("keyboard").innerHTML = equipment.get("keyboard");
document.getElementById("battery").innerHTML = equipment.get("battery");


let text = "";  //  texti atadım. her value ve key kadar key yaz ve value yaz alta in. 
equipment.forEach(function(value, key) {    //Bu oluşan metni text'e atadım. Sonra onu da listall id'si olan tag'e yazdım.
    text += key + ' = ' + value + "<br>"
})
document.getElementById("listall").innerHTML = text;

let text2 = ""; //  Üsttekinin aynısı burada value veya key demeden, entries(hepsini) kontrol ettim. oluşan metni text2 id'ye sahip tag'e yazdım.
for (const x of equipment.entries()) {
    text2 += x + "<br>";
}
document.getElementById("listall2").innerHTML = text2;


const laptop = {    //  Object
    firstName: "A7 V13.2 17,3",
    lastName: "Monster",
    cpu: "Intel i5-11400H ",
    gpu: "RTX 3050TI",
    fullName: function() {
        return this.firstName +" "+ this.lastName +" "+ this.cpu +" "+ this.gpu; 
    }
};
document.getElementById("laptopspec").innerHTML = laptop.fullName();


const furniture = new Set(["table","refrigerator","oven"]); //  const furniture = new Set(); ile boş Set oluşturabilirdim.
furniture.add("dishwasher");                                //   Değerleri atadıktan sonra Set e ekleyebilirdim.
document.getElementById("furniturelistsize").innerHTML=furniture.size;
let text3 = "";
furniture.forEach(function(value){
    text3 += value + "<br>";
})
document.getElementById("furniturelist").innerHTML=text3;