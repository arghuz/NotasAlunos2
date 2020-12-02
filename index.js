
//////////////////////////////// variaveis ////////////////////////////////////////////////////
var Aluno = [{nome: 'Joao',nota: 5.0,idade: 45},
{nome: 'Alfredo',nota: 8.0,idade: 17},
{nome: 'Rafael',nota: 6.0,idade: 20},
{nome: 'Leonardo',nota: 9.9,idade: 22},
{nome: 'Jean',nota: 4.0,idade: 26},
{nome: 'Beto',nota: 7.0,idade: 55},
{nome: 'Luciana',nota: 9.0,idade: 56},
{nome: 'Victor',nota: 2.0,idade: 33},
{nome: 'Maria',nota: 4.0,idade: 18},
{nome: 'Otavio',nota: 9.6,idade: 47},
{nome: 'Priscila',nota: 2.0,idade: 23},
{nome: 'Steves',nota: 6.9,idade: 89},
{nome: 'Victorina',nota: 8.1,idade: 37},
{nome: 'Gumerlinda',nota: 1.9,idade: 10},
{nome: 'Samuel',nota: 7.1,idade: 56}];
var array1 = [];
var array2 = [];
var Mediana = 0; 
var media = 0; 
var Moda = 0;

//
//////////////////////////////////Funções/////////////////////////////////////////////////////


async function Cal1() {
  try {
	let Status = {status: 'aprovado'};
	let Status2 = {status: 'reprovado'};
	for (var i = 0;i < Aluno.length; i++) {
			media += Aluno[i].nota;
			if(Aluno[i].nota >= 6 ){
				let returnedTarget = Object.assign(Aluno[i], Status);
				//console.log(returnedTarget);
			}
			if(Aluno[i].nota < 6 ){
				let returnedTarget = Object.assign(Aluno[i], Status2);
				//console.log(returnedTarget);
		}
		}
	var resultado = (media/Aluno.length);
	Aluno.push({media: resultado});
	return resultado;
  }
  catch (err) {
    console.log('failed', err);
  }
}

async function Cal2(){
	try {
		
		for (var i = 0; i < Aluno.length; i++) {
			array1.push(Aluno[i].nota);
		}
		array1.sort;
		Mediana = median(array1);

		Aluno.push({mediana: Mediana});
		return(Mediana);
		}
	catch (err) {
    console.log('failed', err);
	}
}

async function CalModa(){
	var Anterior = 0;
	var Atual = 0;
	try{
		for (var cont = 0; cont < array1.length; cont++){
			Atual  = array1[cont];
			if(cont === 0){
				Anterior = Atual;
			}
			if((cont !== 0) && (Anterior === Atual)){
				Moda = Atual;
			}
			Anterior = Atual;
		}
		Aluno.push({moda: Moda});
		return Moda;
		
	}
	catch (err) {
    console.log('failed', err);
	}
}

function median(values){
  if(values.length ===0) return 0;

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}


//Promise
var p1 = Promise.resolve(Cal1());
var p2 = Promise.resolve(Cal2());
var p3 = Promise.resolve(CalModa());



Promise.all([p1, p2, p3]).then((values) => {
		let mgs1 = {Mensagem: 'quase la, tenta mais um pouco!'};
		let mgs2 = {Mensagem: '...'};
		let Status = {status: 'aprovado'};
		let Status2 = {status: 'reprovado'};
		let comentario1 = {comentario: 'precisa melhorar!'};
		let comentario2 = {comentario: 'sua nota esta acima da moda!'};

		for (var i = 0; i < Aluno.length; i++) {
			
			if((Aluno[i].nota > media) & (Aluno[i].nota > Mediana)){
				let returnedTarget = Object.assign(Aluno[i], mgs1);
				//console.log(returnedTarget);
			}
			if((Aluno[i].nota < media) & (Aluno[i].nota < Mediana)){
				let returnedTarget = Object.assign(Aluno[i], mgs1);
				//console.log(returnedTarget);
			}
			if(Aluno[i].nota >= 6 ){
				let returnedTarget = Object.assign(Aluno[i], Status);
				//console.log(returnedTarget);
			}
			if(Aluno[i].nota < 6 ){
				let returnedTarget = Object.assign(Aluno[i], Status2);
				//console.log(returnedTarget);
			}
			if(Aluno[i].nota > Moda){
				 let returnedTarget = Object.assign(Aluno[i], comentario2);
				//console.log(returnedTarget);
			}
			if(Aluno[i].nota <= Moda){
				let returnedTarget = Object.assign(Aluno[i], comentario1);
				//console.log(returnedTarget);
			}
		}
		console.log('Realizado',Object.values(Aluno));
});





