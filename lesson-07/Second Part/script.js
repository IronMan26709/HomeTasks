
////////////////////////////////// SECOND PART   //////////////////////////////////////////////////
var collection = []

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out (event){
    event.target.style.backgroundColor = "#ff00ff50"
}
function clickhandler (event){
    event.target.remove()
}
for ( var item of ["first","second","theard","fourth"]){
    var elem = document.createElement("div")
        console.log(collection.length)
        elem.style = ` 
            background: #ff00ff50;
            width:${400 - 50 * collection.length}px;
            height:${400 - 50 * collection.length}px;
            border: dotted 1px yellow; 
            position:absolute;
            top:7.5%;
            left:7.5%;
        `;
        (!collection.length? document.body:
            collection[collection.length - 1]).appendChild(elem);
            collection.push(elem)
            elem.onmouseover = over;
            elem.onmouseout = out;
            elem.onclick = clickhandler

}