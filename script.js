// console.log("Qr code generator");
let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let btn = document.querySelector(".btn");
function generateQr(){
    console.log(qrText.value);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
}
btn.addEventListener("click",()=>{
    generateQr();
})
// URL.createObjectURL()
