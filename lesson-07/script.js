var p = document.body.appendChild(
    document.createElement("p")
)
p.innerText = "Hi"
p.onclick = function(event){
    var img = document.body.appendChild(
    document.createElement("img"))
    img.style = `
        width: 100px;
        height: 150px;
    `
    img.src = "http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg"
    img.onmouseover = function(event){
        this.style = `width: 200px; transition:2s ease `
    }
    img.onmouseout = function(event){
        this.style = `width: 100px; transition:2s ease `
    }
    img.onclick = function(event){
        this.parentNode.removeChild(img)
    }
}