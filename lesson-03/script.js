console.log("Первая часть задания")
/////////////////////////////////////////////// FirstPart  //////////////////////////////////////////////////////////////////////
function chocho(){
	console.log (arguments.callee );
	console.log(arguments)
}
chocho(10, false, "google")

////////////////////////////////////////////////     SeconPart   //////////////////////////////////////////////////////////////////
console.log("Вторая часть задания")

function userInfo (registered, data,name) {
    this.registered === true ? console.log(`Дата регистрации : ${this.data.toLocaleDateString()}` ) : console.log(` Незарегистрированный пользователь ${this.name}` )
}
var user1 = {
    name: "Vasia",
    registered: true,
    data: new Date(2000, 5 ,4),
    getInfo: userInfo
}

var user2 = {
    name: "Petya",
    registered: false,
    getInfo: userInfo
}

user1.getInfo()
user2.getInfo()