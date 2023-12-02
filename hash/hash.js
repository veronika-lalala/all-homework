let fs=require('fs');
let arg=process.argv;
let s=fs.readFileSync(arg[2]).toString();
let t=arg[3];
let l=t.length;
let ht=0;// хеш строки t
let hs=0;//хеш подстроки s
let stance=new Array;//массив для сохранения позиций подстроки

//вычисляем хеш t 
for(let i=0; i<l;i++){
	let p=t.charCodeAt(i);
	let deg=l-1-i;
	ht+=p*2**deg;
	
}

for (let i=0;i<=s.length-l;i++){
	
	if (i==0){
		//считаем изначальный хеш
		for(let k=0;k<l;k++){
			let p=s.charCodeAt(k);
			let deg=l-1-k;
			hs+=p*2**deg;
		}
	}
	else{
		
		hs=(hs-s.charCodeAt(i-1)*2**(l-1))*2+s.charCodeAt(i+l-1);
	}
	//проверяем совпали ли хеши и найдена ли нужная подстрока 
	if (hs!=ht){
		continue;
	}
	else{
		flag=0;
		for (let j=0;j<l;j++){
			if (s[j+i]==t[j]){
				continue;
			}
			else{flag=1}
		}
		if (flag!=0){continue}
		else{
			stance.push(i+1);//по условию нумерация с 1
		}
	}
}
console.log('Подстрока',t,'найдена на следующих позициях:',stance);



