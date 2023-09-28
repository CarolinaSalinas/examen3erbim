nom=prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");
preg1=prompt("¿En que departamento se encuentra el lago titicaca?\n A: Tacna \n B: Puno \n C: Cusco");
if (preg1=="B"){
    preg1=1
}
else{
    preg1=0
}
preg2=prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\n A: Lima e Ica \n B: Arequipa y Tacna \n C: Piura y Tumbes");
if (preg2=="C"){
    preg2=1
}
else{
    preg2=0
}
preg3=prompt("Plato típico de la Selva peruana\n A: Tacacho con cecina \n B: Arroz con pollo \n C: Lomo saltado ");
if (preg3=="A"){
    preg3=1
}
else{
    preg3=0
}
puntaje=preg1+preg2+preg3
if (puntaje==3){
    document.write("Lo has hecho bien ", nom)
}
else{
    document.write("Vuelve a intentarlo ", nom)
}
