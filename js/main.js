import {db} from "../datubasea.json"
window.onload= (event) =>{
    let izenburua=document.querySelector("body > div > div.flex.right > form > input[type=text]:nth-child(1)");
    let egilea=document.querySelector("body > div > div.flex.right > form > input[type=text]:nth-child(3)");
    let isbn=document.querySelector("body > div > div.flex.right > form > input[type=text]:nth-child(5)");
    let data=document.querySelector("body > div > div.flex.right > form > input[type=text]:nth-child(7)");
    let irudia=document.querySelector("body > div > div.flex.left > img");

    izenburua.value=db[0].izenburua;
    izenburua.value="aaa";
    console.log(db[0].izenburua);
    function atzera(event){
    
    }

}