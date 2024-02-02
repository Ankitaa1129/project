function changeBG(color)
{
    document.body.style.backgroundColor=color;
    let hed=document.getElementsByClassName("heading");
         if(color=="#000000")
 {
        for(let elm of hed){
       elm.style.color="white";
    }

}
else{
    for(elm of hed){
   elm.style.color="black";
   }
 }
}

let box=document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text =this.value;
    let char=text.length;
    document.getElementById("char").innerHTML=char;

text=text.trim();

    let words=text.split(" ");
    let clean=words.filter(function(elm){
return elm!="";
    });
    document.getElementById("word").innerHTML=clean.length;
});

var cel=document.getElementById("cel");
var fah=document.getElementById("fah");
cel.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    fah.value=f;
});
fah.addEventListener('input',function(){
    let f=this.value;
    let c=(f- 32)*5/9;
    cel.value=c;
});