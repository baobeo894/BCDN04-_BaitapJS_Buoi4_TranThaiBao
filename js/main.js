function Arrange() {
    //! tất cả value từ UI đều là kiểu string
    //! do dấu + đang nối chuỗi ký tự
    //=> ép kiểu/đổi kiểu dữ liệu => chuyển từ string sang number
    var sothuc1 = document.getElementById("sothuc1").value;
    var sothuc2 = document.getElementById("sothuc2").value;
    var sothuc3 = document.getElementById("sothuc3").value;
   
    console.log(sothuc1, sothuc2, sothuc3);


    var array = [Number(sothuc1) , Number(sothuc2) , Number(sothuc3)];

    if(Number(sothuc1)>Number(sothuc2) && Number(sothuc1)>Number(sothuc3)){
        console.log(array) 
        document.getElementById("txtResultTB").innerHTML = Number(sothuc1) > Number(sothuc2) > Number(sothuc3);
    }
    

}
  

document.getElementById("btnarrange").onclick = Arrange;







