//variáveis da bolinha
let xBolinha =300;
let yBolinha=200;
let diametro=18;
let raio= diametro/2;

//velocidade da bolinha 
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raqueteComprimento= 10;
let raqueteAltura=90;

//variáveis da raquete
let xRaquete =5;
let yRaquete= 150;
    
function setup() {
  createCanvas(590, 390);
}

function draw() {
 background(0);
 mostraBolinha();
// movimentaBolinha();
verificaColisaoBorda();
  mostraRaquete();

 
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
 if (xBolinha + raio >width ||
     xBolinha - raio < 0){
   velocidadexBolinha *= -1; 
 }
 if (yBolinha + raio > height|| 
     yBolinha - raio < 0 ){
    velocidadeyBolinha *= -1; 
  }
}
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
 xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha; 
} 
  function verificaColisaoBorda(){
    
    
  }
function mostraRaquete(){
rect (xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}