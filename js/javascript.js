console.log("Hellow from js");
console.error("test");
console.warn("warning test");
document.getElementById("h3_main").innerHTML= "just  do it rigt";



const y = 100;
//y = 50;
console.log(typeof y);
//primitive datatype
// string , nomber , null , boolean , undefined
// best is that you define const

const name = "sina"
const family = false;
const number = 93620783621
const nullType = null
let undefinedType = undefined
console.log(name,family,number,nullType,undefinedType)
console.log(typeof name,typeof family,typeof number,typeof nullType,typeof undefinedType);

// amalgarha
let x = 10;
x++;
x--;
x*=5
x%=5;
console.log(x);

//string woking method and parmet
let stringTest = 'Halal'
// stringTest = 'hal' + x + ' ' + 'kalameh'
// console.log(stringTest);
stringTest = `halal bashe azizam mosavi ${x}`
console.log(stringTest);
console.log(stringTest.length);
console.log(stringTest.toLocaleUpperCase());
console.log(stringTest.substring(5,8));
console.log(stringTest.split(" ")); //this function make a string to split vector


// hellow to arry
const newArryForTest = new Array(1,'ok');
console.warn(newArryForTest);
let myArry = [1 , 'hellow' , false];
console.log(myArry)
console.log(typeof myArry)
console.log(myArry[2])
myArry[2] = "hellow"
console.log(myArry[2])
myArry[3] = "SIMPLE";
console.log(myArry);
console.log(myArry.length);

//baraye ezafe kardan dar araye

myArry.push(true);
console.log(myArry)
console.log(myArry.unshift(undefined));
console.log(myArry.pop())
console.log(myArry)

//hellow to object
console.error("wellcome to object");
 let student = {
    name:  'sarvin',
    lastName : 'style',
    phoenNuber : 9362078321 ,
    corses: ['css' , 'js'],
    address : { contry: "iran" , city: 'tehran'}
 };
 console.log(student);
 console.log(student.address.contry);
 console.log(student.corses[1]);

 console.log(student['name']);
 student.email = 'm.amin.samadifar@gmail.com';
 console.log(student);

 //function and ability

 console.error("function section");
 function plotingFunction(x,y){
    let z = x+y;
    return z;
 }
 console.log(plotingFunction(7,8));
/////////////////////////////////////////////////////////////////
 console.warn("ARREY OBJECT SEC");
//how to define
 const myArryObject = [
   {
      id: 1,
      str:"just for test",
      bolea : false
   },
   {
      id: 2,
      str: "just for test2",
      bolea : true
   }
 ]
 console.log(myArryObject[1]);

 //to convert arryobject to jason
 const myJson = JSON.stringify(myArryObject);
 console.log(myJson);

 //////////////////////////////////////////////////////////////
 console.error("loop");
 for(let i=0 ; i<10;i++){
   console.log(i);
 }
let j=0;
while(j<20){
   console.log("while");
   j++;
}

////////////////////////////////////////////////////////////
console.warn("arry special");
//for of
for(let c of myArryObject) {
   console.log(c);
}

// high order arry method
//forEach , map ,filter
console.log("forEach");
myArryObject.forEach(function(f) {
   console.log(f);
})
console.log("map");
const mappin = myArryObject.map(function(d){
   return {NAME: d.id , ID: d.str}
})
console.log(mappin);

console.log("filter");

console.log(myArryObject.filter(function(cc){
   return cc.bolea === true
}).map(function (dd){
   return dd.id
}))

////////////////////////////////////////////////////////
//condision
console.warn("ifs");
let xxx=10;
if(xxx===10){
   console.log(`halal bashe azizam mosavi ${xxx}`);
}
//ternery oparator
let color = xxx>10 ? "blue" : "red";
console.log(color);

//switch

switch (xxx){
   case 5:
      console.log("5");
      break;
   
   case  10:
      console.log("10");
      break;
   default:
      console.log("fault");
      break;
}

document.getElementById("git_ok_buttom").innerHTML="That os right";

// we add js to git stage
