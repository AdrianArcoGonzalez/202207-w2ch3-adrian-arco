let actualPlayerName;
const greetingAskForName =()=>{
console.log(`Bienvenido a el juego de Pasapalabra!!`)
    const askForName= prompt(`Digame su nombre.`)
    actualPlayerName=askForName;
    return askForName;
}
const askForStart=()=>{
   let askForStarting;
   console.log(`Si no sabes la respuesta de una pregunta puedes poner "pasapalabra" para saltar a la siguiente y escribir "end" para acabar la partida.`)
    do {
    askForStarting= confirm(`Estas preparado para comenzar el rosco?`)
} while (askForStarting===false); 
return askForStarting
}
let randomNumber;
const createRandomNumber =()=>{
    randomNumber= Math.floor(Math.random()*3)+1
   return randomNumber
}

let questionsGame;
const chooseBlockQuestions =(number)=>{  
if(randomNumber===1){
questionsGame= questions
}else if(randomNumber===2){
questionsGame= questions2
}else{
questionsGame= questions3
}
}


const questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}] 

    const questions2 = [	
        {letter: "a", status: 0, answer: "anecdota", question:"Con la a, relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta."},
        {letter: "b", status: 0, answer: "bollo", question:"Con la b, pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas"},
        {letter: "c", status: 0, answer: "cascada",question:"Con la c, corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un rio"},
        {letter: "d", status: 0, answer: "daga", question:"Con la d, arma blanca de hoja corta, ancha y puntiaguda, parecida a la espada pero de menor tamaño"},
        {letter: "e", status: 0, answer:"espiral", question:"Con la e, línea curva que describe varias vueltas alrededor de un punto, alejándose cada vez más de él"},
        {letter: "f", status: 0, answer:"putrefacto",question:"Contiene la f, que está descompuesto o podrido por la acción de diversos factores y determinados microorganismos"},
        {letter: "g", status: 0, answer:"garrulo", question:"Con la g, que se comporta de manera ruda, tosca o grosera"},
        {letter: "h", status: 0, answer:"rechoncho", question:"Contiene la h, persona o animal que es grueso y de poca altura"},
        {letter: "i", status: 0, answer:"interestelar", question:"Con la i, que está en el espacio existente entre dos astros, o que tiene relación con él"},
        {letter: "j", status: 0, answer:"jalapeño", question:"Con la j, chile picante de unos 5 cm de largo, carnoso y de punta redonda, que se usa para condimentar ciertos guisos"},
        {letter: "k", status: 0, answer:"kilo", question:"Con la K, unidad de medida utilizada en el pesage"},
        {letter: "l", status: 0, answer:"homunculo", question:"Con la l, hombre pequeño y débil"},
        {letter: "m", status: 0, answer:"martir", question:"Con la m, persona que sufre o muere por defender su religión o sus ideales. "},
        {letter: "n", status: 0, answer:"neon", question:"Con la n, tubo fluorescente que produce una luz brillante."},
        {letter: "ñ", status: 0, answer:"teñir", question:" Contiene la ñ, dar a una cosa un color distinto del que tiene."},
        {letter: "o", status: 0, answer:"omnisciente", question:"Con la O, que conoce todas las cosas reales y posibles."},
        {letter: "p", status: 0, answer:"alpargata", question:"Contiene la P, calzado de lona, con suela de esparto, cáñamo o goma, que se sujeta al pie por presión o con unas cintas que se atan al tobillo."},
        {letter: "q", status: 0, answer:"quebradizo", question:"Con la q, que se puede romper fácilmente."},
        {letter: "r", status: 0, answer:"rinoplastia", question:"Con la r, operación quirúrgica para restaurar la nariz."},
        {letter: "s", status: 0, answer:"desaliño", question:" Contiene la s,falta de cuidado en la forma de vestir y en el aseo personal."},
        {letter: "t", status: 0, answer:"tabardillo", question:"Con la t, persona alocada, bulliciosa y molesta."},
        {letter: "u", status: 0, answer:"huraño", question:"Con la h,persona que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño."},
        {letter: "v", status: 0, answer:"vasallaje", question:"Con la v, tributo que el vasallo pagaba a su señor o servicio que le prestaba según este vínculo."},
        {letter: "w", status: 0, answer:"walkman", question:"Con la W, aparato reproductor de musica, lanzado en los años 80"},
        {letter: "x", status: 0, answer: "climax", question:"Contiene la x, punto culminante o de mayor satisfacción de la excitación sexual en las zonas erógenas o sexuales."},
        {letter: "y", status: 0, answer:"buey", question:"Contiene la Y, toro castrado, que se utiliza como animal de tiro y del cual se aprovecha su carne."},
        {letter: "z", status: 0, answer:"pazguato", question:"Contiene la z, que es tonto o tiene poca rapidez mental." }
   ];
   
   const questions3 = [
    { letter: "a", answer: "anacardo", status: 0, question: "CON LA A. Fruto seco que proviene de un arbol del mismo nombre."},
    { letter: "b", answer: "bala", status: 0, question: "Con la B, proyectic disparado por un arma de fuego"},
    { letter: "c", answer: "cola", status: 0, question: "CON LA C. apendice o estructura de la parte posterior."},
    { letter: "d", answer: "diamante", status: 0, question: "CON LA D. Mineral de alto precio por su belleza. Ademas es el más duro."},
    { letter: "e", answer: "espacio", status: 0, question: "CON LA E. Lugar entre dos cosas"},
    { letter: "f", answer: "funcion", status: 0, question: "CON LA F. Se usa mucho en programación. Puede ser en forma de flecha"},
    { letter: "g", answer: "gema", status: 0, question: "CON LA G. Llamada piedra preciosa, es una roca, mineral, vidrio o producto orgánico de origen natural"},
    { letter: "h", answer: "acechar", status: 0, question: "CON LA H. Acercarse a algo en las sombras"},
    { letter: "i", answer: "indice", status: 0, question: "CON LA I. Nos marca la posicion de los elementos."},
    { letter: "j", answer: "julio", status: 0, question: "CON LA J. Septimo mes del año"},
    { letter: "k", answer: "kenzo", status: 0, question: "CON LA K. Marca de ropa de origen japones."},
    { letter: "l", answer: "limite", status: 0, question: "CON LA L. Ultimo espacio antes del final"},
    { letter: "m", answer: "miedo", status: 0, question: "CON LA M. Emocion desagradable producida por la percepcion de un peligro"},
    { letter: "n", answer: "nescafe", status: 0, question: "CON LA N. Café en polvo. El amor eterno de todo programador"},
    { letter: "ñ", answer: "niño", status: 0, question: "CONTIENE LA Ñ. Persona de poca edad y de sexo masculino."},
    { letter: "o", answer: "ordago", status: 0, question: "CON LA O. Accion de apostar todo"},
    { letter: "p", answer: "pasapalabra", status: 0, question: "CON LA P. Concepto que da nombre a este juego"},
    { letter: "q", answer: "aquelarre", status: 0, question: "Contiene la Q. conjunto de brujas"},
    { letter: "r", answer: "revolver", status: 0, question: "CON LA R. Arma de fuego corta y robusta"},
    { letter: "s", answer: "silueta", status: 0, question: "CON LA S. Vista de cierto objeto o escena que consiste en el esquema y un interior sin rasgos distintivos"},
    { letter: "t", answer: "tostadora", status: 0, question: "CON LA T. Electrodomestico que genera calor en su interior."},
    { letter: "u", answer: "ultima", status: 0, question: "CON LA U. En relacion a la posicion, final"},
    { letter: "v", answer: "vida", status: 0, question: "CON LA V. Propiedad o cualidad esencial de los animales y las plantas, por la cual evolucionan, se adaptan al medio, se desarrollan y se reproducen."},
    { letter: "w", answer: "whisky", status: 0, question: "CONTIENE LA W. Bebida alcoholica de origen escoces"},
    { letter: "x", answer: "extra", status: 0, question: "CONTIENE LA X. Que se añade a lo normal"},
    { letter: "y", answer: "papaya", status: 0, question: "CONTIENE LA Y. Fruta que contiene muchisima agua de color anaranjado"},
    { letter: "z", answer: "zurcir", status: 0, question: "CON LA Z. Coser, arreglar sobretodo calcetines."}] 

    const completePasapalabra=(arr)=>{
        let pasapalabraCompleted= true
        arr.forEach(element => {
        if(element.status===0||element.status===2){
            pasapalabraCompleted = false
        }})
        return pasapalabraCompleted;
    }   
    let aciertoshighscore;
const counterGoodQuestions=(array)=>{
let aciertos = 0;
    array.forEach(element => {
    if(element.status===1){
        aciertos++}
});
aciertoshighscore= aciertos;
return aciertos
}
const counterWrongQuestions=(array)=>{
    let fallos = 0;
        array.forEach(element => {
        if(element.status===3){
            fallos++}
    });
    
    return fallos
    }
    
    const highScoreTable =()=>{
        let highScore =[{playerName:`Maria`, score:20},{playerName: "Alex",score: 25},{playerName:`Marta`,score: 27},{playerName:"Alberto",score: 23},{playerName: actualPlayerName,score:aciertoshighscore}]
        let highScoreDefinitiva= highScore.sort(function(a,b){
        return b.score-a.score; 
        })
        return console.table(highScoreDefinitiva)
    } 
    let actualAnswer="";
    const throwQuestion=()=>{
        for(let i=0;i<questionsGame.length;i++){
            
                 if(questionsGame[i].status===0 || questionsGame[i].status === 2){
                    console.log(`Estamos en la letra`, questionsGame[i].letter,)
                    let actualQuestion= prompt(`${questionsGame[i].question}`)
                    
                    if(actualQuestion=== null){
                        questionsGame[i].status =3;
                        console.log(`Has fallado. La respuesta era ${questionsGame[i].answer}`)

                    }else if(actualQuestion.toLowerCase() === questionsGame[i].answer ){
                            questionsGame[i].status = 1;
                            console.log(`Has acertado!`)
                        }else if(actualQuestion.toLowerCase() === 'pasapalabra'){
                            questionsGame[i].status= 2
                            console.log(`Pasamos a la siguiente!`)
                        }else if(actualQuestion.toLowerCase() === `end`){
                            counterGoodQuestions(questionsGame);
                            alert(`Hasta la proxima!!`)
                            actualAnswer= actualQuestion;
                            console.log(`Has acabado con ${counterGoodQuestions(questionsGame)} aciertos`)
                            //preguntar en clase como acabar una funcion
                            throw ''
                        }else{
                            questionsGame[i].status=3
                            console.log(`Has fallado. La respuesta era ${questionsGame[i].answer}`)
                        }
            }
        }
        }    
// Implementar finalizar la aplicacion al poner end!!!!
const mainExecuterFunction=()=>{
             greetingAskForName()
          askForStart();
          createRandomNumber()
          chooseBlockQuestions(randomNumber);
          do {
              throwQuestion();  
          } while (completePasapalabra(questionsGame) === false);
          if(counterGoodQuestions(questionsGame)===27){
              console.log(`HAS COMPLETADO EL ROSCO SIN FALLOS!`)  
              console.log(`Esta es la tabla de puntuaciones!`),highScoreTable();
            } else{console.log(`Has completado el rosco con ${counterGoodQuestions(questionsGame)} aciertos y ${counterWrongQuestions(questionsGame)} fallos.`)
            console.log(`Esta es la tabla de puntuaciones!`),highScoreTable();    
        }
    }
mainExecuterFunction();
