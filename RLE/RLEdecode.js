let fs=require('fs');
let arg=process.argv;
let i=0
let Text;
let res='';
let n;
fs.readFile(arg[2],(err,data)=>{
	if (err){
		cosole.error(err);
		return;
	}
	Text = data.toString();
	while (i<Text.length){
		if (Text.charAt(i)=='#'){
			n=Text.charCodeAt(i+1);
			res+=Text.charAt(i+2).repeat(n);
			i+=3
		}else{
			res+=Text.charAt(i);
			i++
		}
	}
	fs.writeFile(arg[3],res, (err) => {
	if (err){
		console.error(err);
		return;
	}
	console.log('The file has been saved!');
	});
			
})