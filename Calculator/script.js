let buttons= document.querySelectorAll(".btn");
let textDisplay= document.getElementById("text");

let result="";
let final=0;
buttons.forEach(button =>{
    button.addEventListener('click', (e)=>{ 
     
      let string=e.target.id;
      if(string === "="){
        final= eval(result);
        textDisplay.value= final;
      }
      else if(string === "clr"){
        final=0;
        result="";
        textDisplay.value= final;
      }
      else if(string === "%"){
        final= eval(result) / 100;
        textDisplay.value= final;
      }
      else{
        result+= string;
        textDisplay.value= result;
      }
    });
}); 