// String without a space or any specail char
//|V      | eat apples             | eatay applesay  


//Assuming String with a space
function getPigLatin(input){
    console.log
    let r ="";
    let start = "";
    let flg = false;
    let checkSC = false;
    let len =0;
    if(input[0] === input[0].toUpperCase()) flg = true;
    if(input[input.length-1].toUpperCase() === input[input.length-1].toLowerCase()) checkSC= true;
    if(checkSC) len = input.length-1;
    else len = input.length
    for(let i=0; i<len;i++){
        if(input[i] === 'a' || input[i]=== 'e' || input[i] === 'i' || input[i]==='o' || input[i]==='u'){
            start = input.slice(0,i)
           if(checkSC) r= (input.slice(i,len) + start + "ay"+ input[len]).toLowerCase();
           else r= (input.slice(i,len) + start + "ay").toLowerCase();

            break;
        }
    }
    if(flg) return r[0].toUpperCase()+r.slice(1);
    else return r;
}

function getResult(inp){
    let result= ""
    var arr= inp.split(" ");
    arr.forEach(elm=>{
        result = result + getPigLatin(elm) + " ";
    });
    return result.trim();
}

let res= getResult("Hello, world!");
console.log(res);