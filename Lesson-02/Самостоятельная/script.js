var group = [
	{
		name: 'Вася',
		lastName: 'Пупкин',
		age: 19,
		notebook: true,
	},
	{
		name: 'Ксюша',
		lastName: 'Лепёшкина',
		age: 17,
		notebook: false,
	},
	{
		name: 'Петя',
		lastName: 'Гаврелюк',
		age: 44,
		notebook: true,
	},
	{
		name: 'Дима',
		lastName: 'Нагиев',
		age: 33,
		notebook: true,
	},
	{
		name: 'Леонтий',
		lastName: 'Погосяненко',
		age: 65,
		notebook: false,
	},
	{
		name: 'Кристина',
		lastName: 'ДА',
		age: 17,
		notebook: true,
	}
];
for( var i = 0; i < group.length  ; i++ ){
		 var stud =`${group[i].name} ${group[i].lastName} ${group[i].age} ${group[i].notebook}`;
		 console.log(stud)
	}	
  function addNewStud( name, lastName, age, notebook) {
     group.push({
        name: name,
        lastName: lastName, 
        age: age,
        notebook: notebook
    })
}
  
addNewStud("вася", "чебурашкин",651 , false )	

//////////////////////////////////////////////////////  Задание 5   ///////////////////////////////////////////////////////////////////////
var names = ["Khadija","Lee","Alicia","Lachlan","Margie","Isabelle","Ellie-May"];
var surname = ["Holmes","Reed","Hunt","Duncan","Singh","Gardiner","Nelson"];

for(var i = 0; i < names.length; i++){
        var concat = `${names[i]} ${surname[i]}`
        console.log(concat);
   }