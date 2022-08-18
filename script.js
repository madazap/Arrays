let monedas=[0,0,0,0,0,0];
let valores=[50,20,10,5,2,1]

let retorno=prompt("Digita el valor a retornar")
let contador;
let residuo;

const vueltas=new Calculadora(retorno,valores);
vueltas.getCoins();

class Calculadora{
    
    constructor(retorno, valores){
            this.retorno=parseInt(retorno);
            this.valores=valores;
    }

    getCoins(){
        let n;
        while(n<5){

            let moneda=this.retorno/this.valores[n];
            contador=parseInt(moneda);
            monedas[n]=contador;
            residuo=retorno - (contador*valores[n])
            retorno=residuo;
            n++;

        }
            console.log(monedas.join("*"));

    }

}



