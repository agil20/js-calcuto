
let math1=document.getElementById("math1")
let math2=document.getElementById("math2")
let topla=document.getElementById("topla")
let cix=document.getElementById("cix")
let bol=document.getElementById("bol")
let vur=document.getElementById("vur")
let result=document.getElementById("result")
topla.addEventListener("click", function(){
    
    let birinci=parseInt(math1.value)
    let ikinci=parseInt(math2.value);
  if (    math1.value==""||    math2.value=="" ) {
    result.innerText="eded daxil edin"

    result.style.fontSize="20px"

  } else {
    result.innerText=birinci+ikinci
  }
 
    math1.value=""
    math2.value=""
result.style.color="red"
   
})
cix.addEventListener("click", function(){
    birinci=parseInt(math1.value)
     ikinci=parseInt(math2.value)
     if (    math1.value==""||    math2.value=="" ) {
      result.innerText="eded daxil edin"
  
      result.style.fontSize="20px"
    } else {
      result.innerText=birinci-ikinci
    }
     
    math1.value=""
    math2.value=""
})
bol.addEventListener("click", function(){
    let birinci=parseInt(math1.value)
    let ikinci=parseInt(math2.value)
    if (    math1.value==""||    math2.value=="" ) {
      result.innerText="eded daxil edin"
  
      result.style.fontSize="20px"
    } else {
      result.innerText=birinci/ikinci
    }
    math1.value=""
    math2.value=""
})
vur.addEventListener("click", function(){
    let birinci=parseInt(math1.value)
    let ikinci=parseInt(math2.value)
    if (    math1.value==""||    math2.value=="" ) {
      result.innerText="eded daxil edin"
  
      result.style.fontSize="20px"
    } else {
      result.innerText=birinci*ikinci
    }
    math1.value=""
    math2.value=""
})