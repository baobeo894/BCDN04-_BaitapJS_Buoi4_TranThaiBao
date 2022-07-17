// bài 1
function sapxep() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    console.log(Number(c), Number(b), Number(a))


    if (a > b && a > c) {
        var arrange = Number(c) + "<" + Number(b) + "<" + Number(a)
        console.log(Number(c) + "<" + Number(b) + "<" + Number(a))
    }
    else if (a > b && c > b) {
        var arrange = Number(b) + "<" + Number(c) + "<" + Number(a)
        console.log(Number(b) + "<" + Number(c) + "<" + Number(a))
    }
    else if (a > b && c > a) {
        var arrange = Number(b) + "<" + Number(a) + "<" + Number(c)
        console.log(Number(b) + "<" + Number(a) + "<" + Number(c))
    }
    else if (b > a && b > c) {
        var arrange = Number(c) + "<" + Number(a) + "<" + Number(b)
        console.log(Number(c) + "<" + Number(a) + "<" + Number(b))
    }
    else if (b > c && c > a) {
        var arrange = Number(a) + "<" + Number(c) + "<" + Number(b)
        console.log(Number(a) + "<" + Number(c) + "<" + Number(b))

    }
    else {
        var arrange = Number(a) + "<" + Number(b) + "<" + Number(c)
        console.log(Number(a) + "<" + Number(b) + "<" + Number(c))
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

// bài 2
function sayhi() {


    var member = document.getElementById("selectPerson").value;
    console.log("", member);

    if (member == "B") {
        var xinchao = "Xin chào bố";
        console.log(xinchao);
    } else if (member == "M") {
        var xinchao = "Xin chào Mẹ";
        console.log(xinchao);
    } else {
        var xinchao = "Xin chào Anh trai";
        console.log(xinchao);
    }

    document.getElementById("txtResultsayhi").innerHTML = xinchao;

}

document.getElementById("btnsayhi").onclick = sayhi;



// bài 3
function demsochanle() {
    
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    console.log(Number(so1), Number(so2),Number(so3));

    var count = 0;
    if(so1 % 2 == 0){
        count++; 
    }else {
        count =count;
    }if(so2 % 2 ==0){
        count++;
    }else{
        count =count;
    }if(so3 % 2 ==0){
        count++;
    }else{
        count =count;
    }

   var count1 = Number(3) -count 

    document.getElementById("txtResultdem").innerHTML =  "Có " + count + "\nsố chẵn" +"\n , " + count1 + "\nsố lẻ";
}

document.getElementById("btndem").onclick = demsochanle;


// bài 4
function dudoan() {
    
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;
    console.log(Number(canh1), Number(canh2),Number(canh3));

    if(Number(canh1) == Number(canh2) && Number(canh2) == Number(canh3)){
        var doan = "Hình tam giác đều";
    }
    else if(Number(canh1)*Number(canh1) == Number(canh2)*Number(canh2) + Number(canh3)*Number(canh3) || Number(canh2)*Number(canh2) == Number(canh1)*Number(canh1) + Number(canh3)*Number(canh3) || Number(canh3)*Number(canh3) == Number(canh1)*Number(canh1) + Number(canh2)*Number(canh2)){
        var doan = "Hình tam giác vuông";
    }
    else if (Number(canh1) == Number(canh2)  || Number(canh2) == Number(canh3) || Number(canh1) == Number(canh3)){
        var doan = "Hình tam giác cân"
    }
   
    else {
        var doan ="Một loại tam giác nào đó";
    }

    document.getElementById("txtResultdoan").innerHTML =  doan;
}

document.getElementById("btndoan").onclick = dudoan;