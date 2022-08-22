let monedas=[0,0,0,0,0,0];
let valores=[50,20,10,5,2,1]

let retorno=prompt("Digita el valor a retornar")
let contador;
let residuo;


class Calculadora{
    
    constructor(retorno, valores){
            this.retorno=parseInt(retorno);
            this.valores=valores;
    }

    getCoins(){
        let n=0;
        
        while(n<5){

            console.log(retorno);
            let moneda=retorno/valores[n];
            contador=parseInt(moneda);
            monedas[n]=contador;
            residuo=retorno - (contador*valores[n])

                if(residuo==0){
                  break;
                }
                else{
                  retorno = residuo;
                  //console.log(retorno);
                }

            
           
            n++;

        }
            monedas.reverse();
            console.log(monedas.join("/"));

    }

}

const vueltas = new Calculadora(retorno, valores);

vueltas.getCoins();

