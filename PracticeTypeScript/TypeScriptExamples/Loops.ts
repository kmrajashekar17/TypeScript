let a5 : number = 10;

if(a5<=15) {
    console.log("IF statement executed");
}
//----------
let a8 : number = 10;

if(a8>=15) {
    console.log("IF statement executed");
}
//---------
let a9 : number = 10;

if(a9>=15) {
    console.log("IF statement executed");
}
else {
    console.log("ELSE statement executed");
}
//-----------
let a11 : number = 10;

if(a11==20) {
    console.log("a value is 20");
}
else if(a11==30) {
    console.log("a value is 30");
}
else if(a11==40) {
    console.log("a value is 40");
}
else {
    console.log("ELSE statement executed");
}
//-----------
let a12 : number = 40;

if(a12==20) {
    console.log("a value is 20");
}
else if(a12==30) {
    console.log("a value is 30");
}
else if(a12==40) {
    console.log("a value is 40");
}
else {
    console.log("ELSE statement executed");
}
//------
let aa1 : number = 40;
let bb1 : number = 50;
if(aa1==40) // 1st condition
{
    if(bb1==20) // 2nd condition
    {
        console.log("a value is 40 and b value is 20");
    }
    else {
        console.log("else statement of 2nd condition");
    }
}
else {
    console.log("else statement of 1st condition");
}

//----------
let ar : number = 20;
let br : number = 50;
if(ar==40) // 1st condition
{
    if(br==20) // 2nd condition
    {
        console.log("a value is 40 and b value is 20");
    }
    else {
        console.log("else statement of 2nd condition");
    }
}
else {
    console.log("else statement of 1st condition");
}

//-----------
let ae : number = 10;

while(ae<=15)
{
    console.log(ae);
    ae++;
}
//-----
let af : number = 20;

while(af<=15)
{
    console.log(af);
    af++;
}
//----------
let ag : number = 20;

do {
    console.log("Value of a1 is : "+ag);
    ag++;
} while(ag<=10);

//---------
for(let i=1; i<=20; i++){
    console.log(i);
}
//---------


for(let i=1; i<=20; i=i+2){
    console.log(i);
}
//--------------


for(let i=20; i>=1; i--){
    console.log(i);
}
//----------

for(let i=10; i<=15; i++){
    if(i==13)
        break;
        //continue;
    console.log(i);
}

for(let i=10; i<=15; i++){
    if(i==13)        
        continue;
    console.log(i);
}

console.log("For of loop");
const sub:number[]=[1,2,3];
console.log("Length ",sub.length);
console.log("2 index value  ",sub[2]);
for(const s of sub)
{
    console.log(s);
}