let fs=require('fs');
let arg=process.argv;
let inText;
let i=0,n=1;
let res='';
let c=0,ost=0;
let coefficient=0;
fs.readFile(arg[2],(err,data)=>{
	if (err){
		cosole.error(err);
		return;
	}
	inText = data.toString();
	while (i < inText.length){
		while(inText.charAt(i) == inText.charAt(i+n)){
			n++;
		}
		if (n>3){
			if (n>255){
				c=(n-n%255)/255;
				ost=n%255;
				res=res+`#${String.fromCharCode(255)}${inText.charAt(i)}`.repeat(c)+`#${String.fromCharCode(ost)}${inText.charAt(i)}`;
				
			}else{
				res = res+`#${String.fromCharCode(n)}${inText.charAt(i)}`;
			}
		} else{
			if (inText.charAt(i)=='#'){
				res = res+`#${String.fromCharCode(n)}${inText.charAt(i)}`;
			}else{
				res=res+inText.charAt(i).repeat(n);
			}
		}
		i += n;
		n  = 1;
		
	}
	coefficient=inText.length/res.length;
	fs.writeFile(arg[3],res, (err) => {
	if (err){
		console.error(err);
		return;
	}
	console.log('The file has been saved!');
	console.log('Коэффициент сжатия:'+coefficient.toFixed(2));

	});
	

	
	
});

	
