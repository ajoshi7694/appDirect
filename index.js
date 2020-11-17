// String without a space or any specail char

//hhello                  | ellohhay        


//Assuming String without a space or any specail char
function getPigLatin(input){
    let r ="";
    let start = "";
    var arr= input.split("");
    for(let i=0; i<input.length;i++){
        if(input[i] === 'a' || input[i]=== 'e' || input[i] === 'i' || input[i]==='o' || input[i]==='u'){
            start = input.slice(0,i)
            r= input.slice(i,input.length) + start + "ay";
            break;
        }
    }
    return r;
}

let res= getPigLatin("hello");
console.log(res);