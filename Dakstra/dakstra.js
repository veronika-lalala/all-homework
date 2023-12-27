//работает только для однозначных положительных чисел
let fs=require('fs');
let arg=process.argv;
let s=fs.readFileSync(arg[2]).toString();

s=s.replaceAll(' ','');
let elem=new Array();
elem=s.split('')

//////////////////////////////////////Формируем обратную польскую запись////////////////////////////////////////
//приоритеты
let priority=new Object();
priority={'(':0,'-':1,'+':1,'*':2,'/':2,'^':3};
let stack=new Array();

let polish=new Array();
for (let i=0;i<elem.length;i++){
	
	
	if (/\d/.test(elem[i])){
		polish.push(elem[i]);
		continue;
	}
	 
	if (elem[i]=='('){
		stack.push('(')
		
		
		continue;
	}//какая-то залупа выходит 
	if (elem[i]==')'){
		
		while (stack[stack.length-1]!=='('){
			
			polish.push(stack[stack.length-1]);
			stack.pop();
		}
		
		stack.pop()//чтобы удалить (
		continue;
	}

	if ((priority[elem[i]]>priority[stack[stack.length-1]]) || stack.length==0 ||((priority[elem[i]]>=priority[stack[stack.length-1]]) && (elem[i]=='^'||elem[i]=='/'))){//доп условия нужны для реализации правой ассоциативности
		
		
		stack.push(elem[i]);
		
		
	}
	else{
		while (priority[stack[stack.length-1]]>=priority[elem[i]]){
			polish.push(stack[stack.length-1]);
			stack.pop();
		}
		stack.push(elem[i]);
	}
	


}

//чистка стека
while(stack.length>0){
	polish.push(stack[stack.length-1])
	stack.pop();
	
}
/////////////////////////////////////////////////////Вычисление выражения///////////////////////////////////////////////
let answer=0;
for(let i=0;i<polish.length;i++){
	if(/\d/.test(polish[i])){
		stack.push(Number(polish[i]))
	}
	else{
		switch(polish[i]){
			case '+':
				
				stack[stack.length-2]=(stack[stack.length-1])+(stack[stack.length-2]);
				stack.pop()
				
				break;

			case '-':
				
				stack[stack.length-2]=(stack[stack.length-2])-(stack[stack.length-1]);
				stack.pop()
				
				break;
			case '*':
				
				stack[stack.length-2]=(stack[stack.length-1])*(stack[stack.length-2]);
				stack.pop()
				
				break;
			case '/':
				
				stack[stack.length-2]=(stack[stack.length-2])/(stack[stack.length-1]);
				stack.pop()
				
				break;
			case '^':
				
				stack[stack.length-2]=(stack[stack.length-2])**(stack[stack.length-1]);
				stack.pop()
				
				break;
		}
	}
}
answer=stack[0];
console.log(answer);


