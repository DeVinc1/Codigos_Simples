function realizarTeste(num){
   
   let numeroTestado = num
   let divisor = numeroTestado - 1
   let resultado = ""
 

      if(numeroTestado < 0){
         resultado += "Insira um valor válido"
         console.log(resultado);
      }
      else{
         while (numeroTestado % divisor !== 0){
            divisor--
         }
         
         if (divisor > 1 || numeroTestado == 0){
            resultado += "O número " + numeroTestado + " não é primo"   
         }
         else{
            resultado += "O número " + numeroTestado + " é primo"
            divisor = "somente por 0 e ele mesmo (" + numeroTestado + ")"  
         }
         
         console.log(resultado + " pois é divisivel por " + divisor)

         
      }
   }

//Altere o valor entre parentênses para testar um número específico
realizarTeste(25);
