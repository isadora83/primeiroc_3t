let tabuada = 2;

function escreva(){
    document.write(tabuada+"x 1 =" +(tabuada*1)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*2)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*3)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*4)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*5)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*6)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*7)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*8)+"<br>");
    document.write(tabuada+"1="+(tabuada*9)+"<br>");
    document.write(tabuada+"x 1 =" +(tabuada*10)+"<br>");
}

function minhatabuada(){
    for(let i=1; i <=10; i++){
        document.write("tabuada do"+ i +"<br>");
        for(let j= 1 ; j<=10;++){
            (document.write(i +" x "+j+ "=" +(j*i)+"<br>"));
        }
        document.write("<br>");
    }
}

function mat(){et v
let v = document.getElementById("valor").Value;
let j = document.getElementById("juros").Value;
let t = document.getElementById("mensais").Value;
let r = 0;
for(let i=1; i<=t; i=++){
    r = v *(1+(j/100));
    v = r;
}
document.write("resultado " + r );
}
