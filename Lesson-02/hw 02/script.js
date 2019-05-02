var latters = [ ];
var string = "Backend As A Service";
var stringSplit = string.split ( ' ' ) ;
stringSplit.forEach( function(i){
	var a = i[0];
	latters.push (a);
	}	
)
console.log(latters);