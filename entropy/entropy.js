let fs=require('fs');
let arg=process.argv;
let s=fs.readFileSync(arg[2]).toString();
let alph = new Array();
for (let i = 0; i < s.length; i++) {
    if (s[i] in alph) {
        alph[s[i]]++;
    }
    else {
        alph[s[i]] = 1;
    }
}

let power = 0;
for (i in alph) {
	power++;
    alph[i] /= s.length;
    
}

let entropy = 0;
if (power>1){
	for (i in alph) {
		entropy -= alph[i] * Math.log(alph[i]);
	}
    entropy /= Math.log(power)
}

console.log("Shannon entropy: ", entropy)