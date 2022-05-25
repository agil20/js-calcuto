

 //1
let new1=document.getElementById("new")
let arr1=[]
let arr2=[]
let list1=document.querySelectorAll(".element1");
let list2=document.querySelectorAll(".element");
list1.forEach(element => {
    arr1.push(element.innerHTML)
});
list2.forEach(element => {
    arr1.push(element.innerHTML)
});
arr2=arr1.filter((item,index)=> arr1.indexOf(item)===index)
console.log(arr2);
console.log(arr1);
let btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    
    
    for (let index = 0; index < arr2.length; index++) {
    let li=document.createElement("li") 
    new1.append(li)
    li.innerText=arr2[index]
    }
    
    


})









