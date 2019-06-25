var addElem = tagName => document.body.appendChild (
    document.createElement ( tagName )
)

var selector = addElem ( 'input' )
selector.type = 'file'
selector.multiple = true
selector.id = 'selectImages'
selector.style.display = 'none'

var label = addElem ( 'label' )

label.htmlFor = 'selectImages'
label.innerText = 'Select images'

var testFile = file => new Promise ((
    resolve, reject)=> file.type.split("/")[0] === "image"?
        resolve(URL.createObjectURL(file)):
        reject("Неверный тип файла")
)

selector.onchange = function ( event ) {
    for ( var file of event.target.files ) {
        testFile ( file )
            .then ( result => addElem ( "img" ).src = result )
            .catch ( error => alert("Неверный тип файла. Укажите файл правильного типа!") )
    }

}