////////////////////////////////////////////     First Part    ////////////////////////////////
// написать код таймера который с интервалом в одну секунду изменяет содержимое элемента на странице
// и так в течении 100с
var p = document.body.appendChild( document.createElement("p")
)

var caunt = 100
function timer(){
    if (!caunt --) return p.remove();
    p.innerText = new Date().toLocaleTimeString()
     setTimeout(timer , 1000)
}
timer()
//////////////////////////////////////////////    Second Part    //////////////////////////////////