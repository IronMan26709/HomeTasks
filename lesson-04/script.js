/////////////////////////////////////////////// FirstPart  //////////////////////////////////////////////////////////////////////
var ladiesHandBar = {
    cosmeticBag:"Sea To Summit",
    purse:"ST Leather",
    keys:"От квартиры",
    addProp: function addNewItem (newKey, newValue){
       ladiesHandBar[newKey] = newValue 
    },
    delProp: function (item){
       delete ladiesHandBar[item] 
    }
}
console.log(ladiesHandBar)
////////////////////////////////////////////////   ThirdPart    //////////////////////////////////////////////////////////////////
function Const (name, age, hobby) {
    this. name = name;
    this.age = age;
    this.hobby = hobby
}
Const. prototype. addProperty = function (newProp, newValue ){
    this[newProp] = newValue
}
Const.prototype.delProperty = function(prop){
    delete this[ prop ]
}
var person1 = new Const("Vasya", 55, "striptiz")
console.log(person1)
var person2 = new Const("Valya", 16, "Chess")
console.log(person2)
///////////////////////////
console.log("       Добавляем свойство объекту")
person2.addProperty("salary", 12558)
console.log(person2)
///////////////////////////
console.log("       Удаляем свойство у объкта")
person2.delProperty("salary")
console.log(person2)