////////////////////////////////////////////   First task    //////////////////////////////// 
function dropString (string){	
	var latters = [ ]; 
	var stringSplit = string.split ( ' ' ) ;
	stringSplit.forEach( function(i){
		var a = i[0];
		latters.push (a);
		}	
	)
	console.log(latters);
	console.log(latters.join(' '))
}
dropString("Backend As A Service")

///////////////////////////////////////  Second task     ///////////////////////////////////////////
function check (x){
	var newData = new Date()
	typeof(x) === "number"? console.log(newData.toLocaleString()) : console.log("Неверный тип данных")

}


check(5)