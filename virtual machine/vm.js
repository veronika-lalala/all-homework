let fs=require('fs');
let mem = new Array();
inText = fs.readFileSync(process.argv[2])
inText= inText.toString();
mem=inText.split(/ |\r\n/ );
let ip=0;
let inpk=3
while (mem[ip]!='exit'){
	switch (mem [ip] ) {
		case 'input':
			mem[parseInt(mem[ip+1])]=process.argv[inpk];
			ip+=2;
			inpk+=1;
			break;
		case 'set':
			mem[parseInt(mem[ip+1])]=parseInt(mem[ip+2]);
			ip+=3;
			break;
		case 'output':
			console.log(mem [parseInt(mem[ip+1])]);
			ip+=2;
			break;
		case 'add':
			mem [parseInt(mem [ip+3])] =parseInt(mem[parseInt(mem[ip+1])])+parseInt(mem[parseInt(mem[ip+2])]);
			ip+=4;
			break;
		case 'sbt':
			mem [parseInt(mem [ip+3])] =parseInt(mem[parseInt(mem[ip+1])])-parseInt(mem[parseInt(mem[ip+2])]);
			ip+=4;
			break;
		case 'push':
			mem[parseInt(mem[ip+2])]=mem[parseInt(mem[ip+1])];
			ip+=3;
			break;
		case 'eq':
			if (mem[parseInt(mem[ip+1])]==mem[parseInt(mem[ip+2])]){
				mem[mem.length]=0;
			}
			else{
				mem[mem.length]=1;
			}
			ip+=3;
			break;
		case 'jnz':
			if (mem[mem.length-1]!=0){
				ip=parseInt(mem[ip+1]);
			}
			else{
				ip+=2;
			}
			break;
		case ':':
			ip+=2;
			break;
		case 'jz':
			if (mem[mem.length-1]==0){
				ip=parseInt(mem[ip+1]);
			}
			else{
				ip+=2;
			}
			break;
		case 'mod':
			mem [parseInt(mem [ip+3])] =parseInt(mem[parseInt(mem[ip+1])])% parseInt(mem[parseInt(mem[ip+2])]);
			ip+=4
			break;
		case 'prod':
			mem [parseInt(mem [ip+3])] =parseInt(mem[parseInt(mem[ip+1])])* parseInt(mem[parseInt(mem[ip+2])]);
			ip+=4
			break;
		case 'div':
			mem [parseInt(mem [ip+3])] =parseInt(mem[parseInt(mem[ip+1])])/parseInt(mem[parseInt(mem[ip+2])]);
			ip+=4
			break;
		case 'max':
			if (parseInt(mem[parseInt(mem[ip+1])])>= parseInt(mem[parseInt(mem[ip+2])])){
				mem [parseInt(mem [ip+3])]=parseInt(mem[parseInt(mem[ip+1])]);
			}
			else{
				mem [parseInt(mem [ip+3])]=parseInt(mem[parseInt(mem[ip+2])]);
			}
			ip+=4;
			break;
		case 'min':
			if (parseInt(mem[parseInt(mem[ip+1])])<= parseInt(mem[parseInt(mem[ip+2])])){
				mem [parseInt(mem [ip+3])]=parseInt(mem[parseInt(mem[ip+1])]);
			}
			else{
				mem [parseInt(mem [ip+3])]=parseInt(mem[parseInt(mem[ip+2])]);
			}
			ip+=4;
			break;
		case 'goto':
			ip=parseInt(mem[ip+1]);
			break;
			
				
	}
}



