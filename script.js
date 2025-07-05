function manipulateArray(){
return new Promise((resolve)=>{
setTimeout(()=>{
resolve([1,2,3,4]);},3000);};)}
.then((array)=>{
setTimeout(()=>{
const evenNumbers=array.filter(num=>num%2===0);
document.getElementById("output").textContent=evenNumbers.join(',');}
,1000);
return evenNumbers;});
.then((evenNumber)=>{
setTimeout(()=>{
	evenNumber.map(num=>num*2);
	document.getElementById("output").textcontent=evenNumbers.join(','));}
		   ,2000);
});
manipulateArray();

