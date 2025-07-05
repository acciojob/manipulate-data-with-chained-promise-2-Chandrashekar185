function manipulateArray(){
return new Promsie((resolve)=>{
	setTimeout(()=>{
resolve([1,2,3,4]);},3000);});
.then((array)=>{
const evenNumbers=array.filter((num)=>num%2===0);
setTimeout(()=>{
documnet.getElementById("output").innerHTML=evenNumbers;},
1000);
return evenNumbers;
})
.then((evenNumbers)=>{const multiply=evenNumbers.map((num)=> num*2);
setTimeout(()=>{
document.getElementById("output").innerHTMl=multiply;},
		   2000);
	
});
}
manipulateArray();