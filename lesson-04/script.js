/////////////////////////////////////////////// FirstPart  //////////////////////////////////////////////////////////////////////
var ladiesHandBar = {
    Косметичка:"Sea To Summit",
    Кошелек:"ST Leather",
    Ключи:"От квартиры",
    Добавить: function addNewItem (newKey, newValue){
       ladiesHandBar[newKey] = newValue 
    },
    Удалить: function (item){
       delete ladiesHandBar[item] 
    }
}

////////////////////////////////////////////////