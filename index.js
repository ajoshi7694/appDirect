// String without a space or any specail char
//| II     | hello world            | ellohay orldway              |     


//Assuming String with a space
function getPigLatin(input){
    let r ="";
    let start = "";
    for(let i=0; i<input.length;i++){
        if(input[i] === 'a' || input[i]=== 'e' || input[i] === 'i' || input[i]==='o' || input[i]==='u'){
            start = input.slice(0,i)
            r= input.slice(i,input.length) + start + "ay";
            break;
        }
    }
    return r;
}

function getResult(inp){
    let result= ""
    var arr= inp.split(" ");
    arr.forEach(elm=>{
        result = result + getPigLatin(elm) + " ";
    });
    return result.trim();
}

let res= getResult("hello world");
console.log(res);