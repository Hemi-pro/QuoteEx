console.log("Script Started");

let quotecontent="Banyak Bicara, Banyak Bekerja"
let quoteauthor ="Bung Karno"
let namaku ="Hemi Yudha Muhammad"

function prevQuote(){
    console.log("prevQuote");
    let containercontentid= document.getElementsById("containercontentid");

    setTimeout(function (){
        containercontentid.remove();}, 3000);
    }

document.addEventListener("DOMContentLoaded", function(){
    console.log("Aku Dipanggil")
    document.getElementById("namaku").innerText=namaku;
})

//DOM : Document Object Model -> HTML
document.addEventListener("DOMContentLoaded", function() {
    console.log("Aku Dipanggil");
    document.getElementById("quotecontent").innerText=quotecontent;
    document.getElementById("quoteauthor").innerText=quoteauthor;
})