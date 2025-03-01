/* // chapter =1 

// var, let , const //
////// var ko remention bhi kar skte hai and redeclare bhi 
var a ="varvasu";
console.log(a);

var a ="varvasu";
console.log(a);

var b ="varvasu";
console.log(b);

var b ='varvasu';
console.log(b);

//////// let ki value change kar skte hai lekin remention nhi kar skte 
{let b ="letvasu";
    console.log(b)};

{let b = 'letvasu';
console.log(b)};

let c="letvasu";
console.log(c);

{let c="letvasu";
    console.log(c)};
 

// null , number , boolean ,bigint, string , symbol , undefined
//n,n,b,b,s,s,u//+++++++++++++++++++++++++++
let a1 =null ;
let b1 = 123 ;
let c1= true ;
let d1= BigInt("20")+BigInt(20);
let e1 = "vasu";
let f1 = Symbol 
let g1 = undefined;
console.log(a1,b1,c1,d1,e1,f1,g1)

// for finding the types //
console.log(typeof f1)
console.log(typeof b1)

// objects in js //
//we can save data like :-
/////// const me na value change kar skte hai or na remention kr skte hai 
const item = {
    "vasu": true,
    "shubham" :false ,
    "2+2":4,
    "5*5" : 25 ,
    "bdydate":18052007}
console.log(item["2+2"])
console.log(item["5*5"])
console.log(item.bdydate)
console.log(item.vasu)


//Q creat a variable of type string and try add a no. to it 
let a3 ="vasu";
let b3 = 4;
console.log(a3+b3)         

//Q use typeof operator to find the datatype of the string in last Q
console.log(typeof (a+b))
 
//Q creat a const object in javascript can you change it to hold a no. later
//not possible 


//Q try to add a new key to the const objct in problem 3 were you are able to do it ?

////// const me apan value add kr skte 
const a4 = {
    name4: "vasu",
    secton: "1" ,
    isaboy :"yes"}
    a4['freind1'] = "shubham"
    a4 ['freind2'] = "sahil"
   console.log(a4)
   console.log(a4['freind1'])
   console.log(a4['freind2'])


  //Q write a js program to creat a word -meaning dictionary of five words 
 const dict ={
    appreciate : "recognize the full worth of",
    ataraxia :"a state of freedom from emotional distribution and anxiety",
    yakka : "work, especially hard work."
}
console.log(dict.yakka)
console.log(dict.appreciate) 


// chapter = 2 

//operators in js 
let a5 = 10 ; 
let b5 =5; 
console.log("a5+b5=",a5+b5)
console.log("a5-b5=",a5-b5)
console.log("a5/b5=",a5/b5)
console.log("a5*b5=",a5*b5)
console.log("a5%b5=",a5%b5)
console.log("a5++b5=", a5++)
console.log("a5++b5=", a5++)  // increment operator 
console.log("a5=",a5)
console.log("++a5=", ++a5)
console.log("++a5=", ++a5)
console.log("a5--b5=", a5--)  // decrement operator 
console.log("--a5=",--a5)
console.log("--a5=",--a5)
console.log("--a5=",--a5)
console.log("--a5=",--a5)
console.log("a5*b5=",a5*b5)

let a6 =10
 let assignment=1
//assignment operators
 assignment +=5  // same as assignment = assignment +5 
 console.log(assignment +a6)

assignment -=5  // same as assignment = assignment +5 
console.log(assignment -a6)

assignment *=5  // same as assignment = assignment +5 
console.log(assignment*a6)

assignment /=5  // same as assignment = assignment +5 
console.log(assignment /a6)  

//  comparison opeerator 
let comp1 = 5
let comp2="5"
console.log("comp1==comp2" ,comp1==comp2)

console.log("comp1!=comp2" ,comp1!=comp2)

console.log("comp1===comp2" ,comp1===comp2)

console.log("comp1!==comp2" ,comp1!==comp2)

console.log("comp1>comp2" ,comp1>comp2)

console.log("comp1<comp2" ,comp1<comp2)

// logical operator 
let a7 =5
let b7 = 6
console.log(a7<b7 && a7==b7)
console.log(a7<b7 || a7==b7)
console.log(!false)
console.log(!true )

*/
// condiitional statement 
/*
//if
let a8 = prompt("age?")
//a8= Number.parseInt(a8)
if (a8>18){alert("this is valid age ")}

//if else
let a9 =// prompt("hey whats your age ?")
//a9= Number.parseInt(a9)
if (a9>18){alert("this is valid age ")}
else {alert("this is an unvalid age" )}

//if elseif else

let  a10 = //prompt("hlo what is your age ");
//a10 = Number.parseInt(a10);
if(a10<0)
     {alert("this is invalid age ");} 
else if (a10<9){alert("you are a kid and you cannot even think of driving");}
else if (a10<18 && a10>9){alert("you are kid you can think of driving after 18");}

else {alert("you can  drive now as yo are above 18")}
    

//Q  use logic operator to find whether the age of a person lies between 10 and 20?
//let age11 = prompt (" what is your age")
if (age11>10 && age11<20)
//{console.log("your age lies between 10 and   20 ")}
//else {console.log("your age doesnt lies between 10 and 20 ")}


// Q  demonstrate the use of switch case statements in javascript 
//let age12 = prompt("what is your age?")

switch(age12){
    case '12' : 
    console .log ("your age is 12")
            break
         case '13' : 
    console .log ("your age is 13")
        break
         case '14' : 
    console .log ("your age is 14")
        break
         case '15' : 
    console .log ("your age is 15")
            break
        default : 
        console.log("your age is not special")
        break
}

//Q  write a javascript program to find whether a number is divisible by 2 and 3
let num13 =prompt ("ur age ?")
//num13 = Number.parseInt(num13)
if (num13 %2 == 0 && num13%3 == 0 ){console.log ("your age is divisible by 2 and 3 ")}
else{console.log("your age  is not divisible by 2 and 3 ")}

//Q   write a javascript program to find whether a numbre is divisible by either 2 or 3 
let num14 = prompt ("what is ur age")
num14 = Number.parseInt(num14)
if (num14 %2 == 0 || num14%3 == 0 ){console.log ("your age is divisible by 2 and 3 ")}
else{console.log("your age  is not divisible by 2 and 3 ")}

//Q  print "you can drive " or "you cannot drive" based on age being greater than 18 using ternay operator 
let age15 = prompt("age??") 
let a15 = age15 > 18 ? "you can drive" : "you cannot drive"
console.log(a15)


// chapter 3 - loops and function 
 // types of loops  in javascript 

 // for loop - loop a block of code no. of times 
 for (let i = 0 ; i < 34 ; i++)
     {console.log (i)}



 // program to add first n natural numbers
 let sum = 0 
 let n16 = prompt("enter the value of n ")
 n16= Number.parseInt(n16 )
 for (let i = 0; i< n16 ; i++){sum +=(i+1)
    console.log((i+1),"+" )
 }
 console.log("sum of first "+ n16 +"natural number is" +sum)



 // for in loop 

 let obj = {vasu : 50,
            vasu1  : 51,
            vasu2 : 52,
            vasu3 : 53,
            vasu4 : 54}
 for (let a17 in obj){console.log ("marks of " + a17+"are"+ obj[a17])}          
 
 

 // for of loop 
 for (let a18 of "vasu" )
        { console.log(a18)}


 // while loop 
let n19 = prompt("enter the value of n ")
n19 = Number.parseInt(n19)
let i19 = 0 ;
while(i19<n19){console.log(i19);  i19++ ; }


// do while loop 
let n20 = prompt("enter the value of n ")
n20 = Number.parseInt(n20)
let i20 = 0 ;
do{console.log(i20) ; i20++ ; }while (i20<n20);
   */
    

// function in javascript 
function onePlusAvg(x21,y21){console.log("done")
return  1 + (x21+y21)/2}
let a21=1;
let b21=2;
let c21=3;
 
console.log("one plus Average of a and b is " , onePlusAvg(a21,b21))
console.log("one plus Average of b and c is " , onePlusAvg(b21,c21))
console.log("one plus Average of a and c is " , onePlusAvg(a21,c21))


 //Q1 write a program to print the marks of a students in an object using for loop obj {vasu:98 , vasu1 :70 ,vasu3 :7}
 let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
  }
  
  for (let i = 0; i < Object.keys(marks).length; i++) {
     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])}



     // Q write the program in  Q1 using forin loop 
     let marks22 = {
        harry22: 0,
        shubham22: 0,
        lovish22: 0,
        Monika22: 0
    }
    for (let key22  in marks22 ){
        console.log("the marks of " + key22 +"are"+marks22[key22])}
    
    
    
    
   //  write a program to print " try again" until the user enters  the correct number 
    
     //let cn = 43
     //let i
     //while (i != cn) {
        // console.log("Try again")
         //i = prompt("Enter a 43 do not enter any other no.")
     //}
     //console.log("You have entered a correct number")
    
    
    
    //Q WRITE a function to find mean of 5 number 
    const mean = (a, b, c, d) => {
        return (a + b + c + d) / 4
    }
    
    console.log(mean(4, 5, 6, 7))
    
   
    // split(''): Converts the string into an array of characters.
    // reverse(): Reverses the array.
    // join(''): Joins the array back into a string.
    
 
    //chapter - 4 strings 

    // template literals 
    let boy24= "vasu"
     let boy25 = "vasu2"
    let sentence24 = `${boy24} is a freind of ${boy25}`
    console.log(sentence24)


    //escape sequence characters 
    let word26 = 'i\'am'   // same string me koi same string ka use karna ho toh us se phele \ lagana hoga  
    console.log(word26)
    

    // To break a string into a new line in JavaScript, use \n. When the string is rendered (e.g., in a console or an alert), the part after \n will appear on the next line.

    let word27 = 'vasudev\nsharma' 
    console.log(word27)
 
    // kisi words ko uper case me login karna ho toh 
    let word29 = "sharma" 
    console.log(word29.toUpperCase())

    // kisi words ko lower case me login karna ho toh 
    let word30 = "sharma" 
    console.log(word30.toLowerCase())


   // kisi word me kuch he letters ko show karna ho toh 
   let word31 = "sharma" 
    console.log(word31.slice(2,4))

    // agar kush letters ko replace karna ho to 
    let word32 = "sharma" 
    console.log(word32.replace("sha","ka"))


    // agar strings ko jodna ho concat ki help se 
    let name34= "vasu"
    let freind34= "shubham"
    console.log(name34.concat(" is a freind of ", freind34 , " ok"))


    //trim  ka use karne se extra space de rakhi hai vo show nhi hogi 
     let freind35= "      vasu       "
     console.log(freind35)   // space nhi hategi 
    console.log(freind35.trim())  // space hat jayegi 
 

    //Q  what will the following print in javascript 
       // console.log("her\""length)
       let str = "Har\""
       console.log(str.length)
      

//Q ** AGAR KOI sentance me koi word match huva toh true likha ana chaiye and
 //the word "..." is in the sentense and agar vo word nhi ho toh false likha ana chaiye and
 // the word "..." is  not in the sentense 

      const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" 
    ${sentence.includes(word) ? 'is' : 'is not'}
     in the sentence`); 
   
  //Q EXTRACT the amount out of this string "plese give rs 1000"
  let str2 = "Please give Rs 1000"
  let amount = Number.parseInt(str2.slice(15))
  console.log(amount)
  console.log(typeof amount)

  //Q try to change 4th character of a given string were you able to do it
  let friend = "Deepika"
friend[3] = "R"
console.log(friend)  // yeh change nhi hoga kyu ki string immutable hota hai



// chapter =5  ARRAYS
//arrays 
let marks_class_12 = [91,82,73,64,65,54,43,32,21,10,false,"not persent"]
marks_class_12[15]=99 //add a new to the array
marks_class_12[2]= 13  // changing the value of an array 
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[15])
console.log (typeof marks_class_12)

// join method
let num38 =  [1,2,3,4,5,6]
let b38 = num38.toString() // b38 is now string 
console.log(b38)
let c38=num38.join(" and ")
console.log(c38)
let d38=num38.join("_")
console.log(d38)

//pop method 
let num39 =  [4,34,5,65,7,87]
let a39 = num39.pop()   // pop returens  the poped elemet //87 will be returned out side of the array and all are return in array 
console.log(num39,a39)

//push method 
let num40 =[5,3,17,90]
let a40 = num40.push(43) // push retuns the new array length // added 43 
console.log(num40,a40)

//shift 
let num41 =[9,4,1,60]
let a41 = num41.shift() //  shift removes  the first element and returns //9 will removed 
console.log(a41 , num41)

// unshift 
let num42 =[1,2,3,4,5]
let a42 = num42.unshift(43) //  unshift add element to the begining and returns new array length  
console.log(a42 , num42)

//setTimeout

let message = document.createElement("p");
message.textContent = "hello";
document.body.appendChild(message);

let av = setTimeout(function () {
  console.log("this alert is in side the setTimeout ");
}, 3000);
// agar kuch alert ko kuch time ke bad me show krna ho toh
let bv = prompt("do u wnt to run the setttimeout ?");
if (bv.toLowerCase() ==="no" ) {
  // cleartimeout ka mtlb kisi alert ko show nhi krna ho  toh ya kisi alert ko silent krna ho usko rokna ho toh cleartimeout kr skte h
  clearTimeout(av);
  console.log("setTimeout was canceled .");
}else{
console.log("setTimeout will execute .")
}
console.log("timeout id :",av);



let message1 = document.createElement("p");
message1.textContent = "hello";
document.body.appendChild(message1);
const sumv= (a1, b, c) => {
  console.log("yes i am running" + (a1 + b + c)); // agar a+b+c ko add krna ho toh
};
setTimeout(sumv, 6000, 3, 5, 7,9,8);

//setinterval
setInterval(function () {
 //alert("hlo vasu");
}, 3000);
//setinterval har kuch second ke bad alert ko show karna h toh setinterval use kr na h



// browser events
//mouse event
//mouse events :click , context menu(right click ), mouseover/ mouseout , mousedown /mouseup, mousemove
// write this into html element// onmouseenter="alert('container ke andar mouse gaya ')"
/*agar kisi element ke uper mouse leke jaynge toh
 alert ayega lekin yeh html ke element  andar likhna hoga
apan alert bhi karva skte h and console.log bhi kr skte h */
// agar yeh function js ke through run krna ho toh
let a2v = document.getElementsByClassName("container")[0];
a2v.onclick = () => {
  let b2v = document.getElementsByClassName("container")[0];
  b2v.innerHTML = "helo vasu";  // agar click karne par web me kuch print krna ho toh 
};

//keyboard event :keydown and keyup  (same as mouse events)

//form element event: sumbit , focus etc (same as mouse events)

// document event : DOMcontentLoaded   (same as mouse events)

//handling browser
// using class extends keyword  (inheritance)   (super keyword)



class vasu {
    constructor(givenname, age) {
      this.name = givenname;
      this.age = age;
    }
    run() {
      console.log(`${this.name} is running`);
    }
  
    play() {
      console.log(`${this.name} is playing`);
    }
  }
  
  class vasu1 extends vasu {
    play() {
      super.play();
      console.log(`${this.name} is playing football`);
    }
  
    walk() {
      console.log(`${this.name} is walking`);
    }
  }
  let av2 = new vasu("vasu", 18);
  let av1 = new vasu1("vasu", 18);
  
  av1.walk();
  av1.play();
  
  //static method in class  (static keyword)  (static method) (static property) (overhide)
  /*/////for wrting gevenname first letter in capital letter we can use capitalize methode  */
  class vasu3 {
    constructor(givenname, age) {
      this.name = givenname;
      this.name = vasu3.capitalize(givenname);
      this.age = age;
    }
    run() {
      console.log(`${this.name} is running`);
    }
  
    play() {
      console.log(`${this.name} is playing`);
    }
  
    ovrhide() {
      console.log("this is overhide method");
    }
  
    static capitalize(givenname) {
      return (
        givenname.charAt(0).toUpperCase() + givenname.substr(1, givenname.length)
      );
    }
  }
  
  class vasu4 extends vasu3 {
    ovrhide() {
      console.log("this is updated overhide method");
    }
    play() {
      super.play();
      console.log(`${this.name} is playing football`);
    }
  
    walk() {
      console.log(`${this.name} is walking`);
    }
  }
  let a3v = new vasu3("sharma", 18);
  let a4v = new vasu4("sharma", 18);
  a4v.ovrhide();
  a4v.walk();
  a4v.play();
  
  //getters, setters
  /*if we are running an function on alert and we have to print the givenname and age
   of the person then we can use get and set method*/
  
  class vasu5 {
    constructor(givenname, age) {
      this.name = givenname;
      this.age = age;
    }
    fly() {
      alert(`
        ${this.name} whose age is ${this.age} now he is flying in the  technical world
      `);
    }
    get name() {
      return this._name;
    }
    set name(newname) {
      this._name = newname;
    }
  }
  let a5v = new vasu5("vasudev", 18);
  a5v.fly();
  console.log(a5v.name);
  
  a5v.name = "sharma vasudev";
  console.log(a5v.name);
  
  // instanceOf Operator  it is used to check the object is created by the class or not if yes then it will return true otherwise false
  console.log(a5v instanceof vasu5);
  try {
    console.log(a instanceof vasu5);
} catch (error) {
    console.error("A doesn't belongs in vasu5 :", error.message);
  
} //a is not created by vasu5 class so it will return false
  
  ///**//// preventDefault() method is used to stop refreshing the page when we click on the link
  
  //chapter 12 - advanced javascript
  //IIFE (immediately invoked function expression)
  //iife mean the function inside the bracket will run immediately (function () {...}) ();  //this is the syntax of IIFE
  let a7v = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("i am done");
      }, 3000);
    });
  };
  (async () => {
    let b7v = await a7v();
    console.log(b7v);
  
    let c7v = await a7v();
    console.log(c7v);
  
    let d7v = await a7v();
    console.log(d7v);
  })();
  
  //destructureing
  let arr = [3, 5, 7, 9, 1, 4, 4, 7, 9, 0, 3];
  let [a8v, b8v, c8v, , , ...rest] = arr;
  console.log(a8v, b8v, c8v, rest);
  //we can also use second methode
  let { a9v, b9v, c9v } = { a9v: 2, b9v: 4, c9v: 7 };
  console.log(a9v, b9v, c9v);
  
  //spread operator
  const arr10 = [7, 6, 5];
  const obj10 = { ...arr10 };
  console.log(obj10);
  
  function sum1(v1, v2, v3) {
    return v1 + v2 + v3;
  }
  console.log(sum1(...arr10));
  
  let obj11 = {
    name: "vasu",
    address: "banglore",
  };
  console.log({ ...obj11, name: "sharma" }); // you have to mention obj before overhiding then name will change vasu into sharma
  
  //hosting
  
  greet(); // if we mention greet before intializing then it will not show any error because hosting takes function up automatically
  function greet() {
    console.log("good mrng");
  }
  
  console.log(a15v); //undefined because a15 is not initialized
  var a15v = 10; // by let and const this will show an error because console is before mention so let and const property not alow if we use var there will be undefined 
  console.log(a15v);
  
  //closer
  function createCounter() {
    let count = 0; // This is a local variable to the outer function
  
    return function () {
      count++; // The inner function modifies the outer variable 'count'
      return count;
    };
  }
  
  const counter = createCounter(); // counter now has a reference to the inner function
  
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  /*Explanation;
  Outer Function (createCounter): It defines a variable count and returns an inner function.
  Inner Function (Closure): The returned function increments and returns count.
  When you call createCounter, it returns the inner function. This returned function "remembers" the count variable, even after createCounter has finished executing.
  Why Use Closures?
  Closures are powerful because they allow us to create private variables and encapsulate data within a function's scope, making our code cleaner and more modular.*/
  
  //Q1 write a javascript program to print the hello world after 2 second dilay
  
  const a16 = (Text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Text);
      }, 2000);
    });
  };
  
  (async () => {
    let Text = await a16("hello");
    console.log(Text);
    Text = await a16("world");
    console.log(Text);
  })();
  
  // WRITE a simple intrest calculator using javascript
  function bhyaz(v, a, s) {
    return (v * a * s) / 100;
  }
  console.log(bhyaz(100000, 1.5, 1));


  //clousers 
  function outer() {
    let counter = 0;
    
    function inner() {
      counter++;
      console.log(counter);
    }
  
    return inner;  // Returning the inner function
  }
  
  const counterFunc = outer();
  counterFunc();  // Output: 1
  counterFunc();  // Output: 2
  