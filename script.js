function getAnswer(){
    let x1 = document.querySelector(".x1").value;
    if (x1==""){
     alert("Не введена координата x1");
           return;
           }
     else {let y1 = document.querySelector(".y1").value;
           if(y1==""){
           alert("Не введена координата y1");
           return;
           }
           else{
               let x2 = document.querySelector(".x2").value;
                if(x2==""){
                   alert("Не введена координата x2");
                   return;
                     }
                  else{
                       let y2 = document.querySelector(".y2").value;
                       if (y2==""){
                       alert("Не введена координата y2");
                       return;
                       }
                     else{    
                         let y3 = document.querySelector(".y3").value;
                           if(y3==""){
                           alert("Не введена координата Y искомой точки");
                           return;
                          } 
                         else if((x1===x2)&&(y1===y2)){
                               alert("некорректные данные - вы задали одну и ту же точку");
                               return;
                                    } 
                                else if((x1===x2)&&(y1!=y2)){ //вертикаль, для любого y один и тот же x
                               document.querySelector(".div-answer").innerText=`Координата X=${x1}`;
                                        } 
                               else if((x1!=x2)&&(y1===y2)){ //горизонталь, y может быть только один. его ввели в y3?
                                    if (y3!=y1){
                                     alert("ваша точка не лежит на заданной горизонтальной прямой");
                                     return;}
                                    else document.querySelector(".div-answer").innerText=`Задана горизонтальная прямая, точек бесконечно`;
                                   }                           
                               else{
                               let a=(+y2 - y1)/(+x2-x1); 
                               let b = +y1- a*x1;
                               let x3= (+y3-b)/a;
                               document.querySelector(".div-answer").innerText=`Координата X=${x3}`;
                        }
                       }
                     }
                }   
            } 
      }            