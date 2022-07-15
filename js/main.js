
function sapxep(){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;



if(a > b && a > c ){
    var arrange = Number(c)+"<"+ Number(b)+"<"+Number(a)
    console.log(Number(c)+"<"+ Number(b)+"<"+Number(a))
}
else if(a > b && c > b){
    var arrange = Number(b)+"<"+ Number(c)+"<"+Number(a)
    console.log (Number(b)+"<"+ Number(c)+"<"+Number(a))
}
else if(a > b && c > a){
    var arrange =Number(b)+"<"+ Number(a)+"<"+Number(c)
    console.log (Number(b)+"<"+ Number(a)+"<"+Number(c))
}
else if(b > a && b > c){
    var arrange =Number(c)+"<"+ Number(a)+"<"+Number(b)
    console.log (Number(c)+"<"+ Number(a)+"<"+Number(b))
}
else if(b > c && c > a){
    var arrange =Number(a)+"<"+ Number(c)+"<"+Number(b)
    console.log (Number(a)+"<"+ Number(c)+"<"+Number(b))

}
else{
    var arrange =Number(a)+"<"+ Number(b)+"<"+Number(c)
    console.log (Number(a)+"<"+ Number(b)+"<"+Number(c))
}

document.getElementById("txtResultTB").innerHTML = arrange;
}
document.getElementById("btnarrange").onclick = sapxep;
// if(a > b){
//     if(b > c){
//         console.log (Number(c)+"<"+ Number(b)+"<"+Number(a))
//     }else{
//         if(a > c){
//             console.log (Number(b)+"<"+ Number(c)+"<"+Number(a))
//         }else{
//             console.log (Number(b)+"<"+ Number(a)+"<"+Number(c)) 
//         }
//     }
// }else{
//     if(b > c){
//         if(a > c){
//             console.log (Number(a)+"<"+ Number(c)+"<"+Number(b))
//         }else{
//             console.log (Number(c)+"<"+ Number(a)+"<"+Number(b))
//         }
//     }else{
//         console.log (Number(a)+"<"+ Number(b)+"<"+Number(c))
//     }
// }


