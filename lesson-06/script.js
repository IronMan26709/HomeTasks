/////////////////////////////////////////////    FIRST PART   //////////////////////////////////////////
//                                                  Обязательная часть ( 3 балла )
//     Создайте массив tags с именами валидных тегов HTML5.Теперь создайте массив classes с именами классов
// ( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )
// Создайте элемент style и вставьте его в head документа
// Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes
// Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes

var tags =["div","p","section","img","a"]
var classes = ["cont","paragraph","section","imeg","link"]
var style = document.createElement(`style`)
document.head.appendChild(style)
style.appendChild(
    document.createTextNode(
        `div {width: 100px; height:100px; background: yellow}
         p {font-size: 20px; color:blue}
         section {width:100%; height: 600px; border: solid 1px green}
         img{width: 560px; height: 400px;border: solid 1px  }
         a{font-size: 20px}
    `)
 )
 for(var i in tags){   
    document.body.appendChild(
        document.createElement(`${tags[i]}`))
        . setAttribute('class', `&{classes[i]}`)
 }
document.getElementsByTagName("p")[0].innerHTML="HI guys";
document.getElementsByTagName('a')[0].innerHTML="Я ссылка. Нуже кликни меня!!!";
document.getElementsByTagName("a")[0].setAttribute("href","https://www.google.com.ua/url?sa=i&source=images&cd=&ved=2ahUKEwji8_H6nbHiAhU_w8QBHZH8D1UQjRx6BAgBEAU&url=https%3A%2F%2Frep.ru%2Farticles%2F14223-muzhchina-ubil-brata-za-lozh-o-ego-kote-starshij-iz-bratev-spravlyal-nuzhdu-v-komnate-a-govoril-chto-vinovat-pitomets%2F&psig=AOvVaw1EbMWWRY6o9scU1QYahwo_&ust=1558686532307420")
document.getElementsByTagName("img")[0].setAttribute("src","http://kyky.org/uploads/post/photo/2479/default_635844198531727087654293112_cat_1-jpg.jpg")




/////////////////////////////////////////////////    SECOND PART    //////////////////////////////////////////////////////////





///////////////////////////////////////////////      THIRD PART       ////////////////////////////////////////////////////////////////