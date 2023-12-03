let fs=require('fs');
let arg=process.argv;
let s=fs.readFileSync(arg[2]).toString();
let t=arg[3];
let m=t.length
let alph=new Array()
let stance =new Array()
//Определяем алфавит строки t
for(i=0;i<m;i++){
	alph[t[i]]=0;
}

//В двумерном массиве del храним таблицу переходов
let del=new Array(m+1)
for(j=0;j<=m;j++){
	del[j]=new Array()
}
//Инициализируем таблицу переходов
for(i in alph){
	del [0][i]=0;
}
//Формируем таблицу переходов
for(j=0;j<m;j++){ 
	let prev=del[j][t[j]];
	del[j] [t[j]]=j+1;
	for(i in alph){
	del[j+1] [i]=del [prev] [i];
	}
	
}
let state = 0;
for (let i=0;i<s.length;i++){
	if(s[i] in alph){
		state = del[state][s[i]];
	}
	else{
		state=0;
	}
	if (state==m){
		stance.push(i-m+2);//если считать, что нумерация с 1
	}
}
if (stance.length>0){
	console.log('Подстрока',t,'найдена на следующих позициях:',stance.join(', '));
}
else{
	console.log('Подстрока',t,'не найдена');
}