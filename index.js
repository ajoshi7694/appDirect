// String without a space or any specail char
//| III    | Hello World            | Ellohay Orldway 


//Assuming String with a space
function getPigLatin(input){
    let r ="";
    let start = "";
    let flg = false;
    if(input[0] === input[0].toUpperCase()) flg = true;
    for(let i=0; i<input.length;i++){
        if(input[i] === 'a' || input[i]=== 'e' || input[i] === 'i' || input[i]==='o' || input[i]==='u'){
            start = input.slice(0,i)
            r= (input.slice(i,input.length) + start + "ay").toLowerCase();
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

let res= getResult("Hello World");
console.log(res);