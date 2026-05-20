// console.log(name);
// let name;

// output ->  reference error

console.log(name);
var name = "john";
// output----> john --> and it saves the name value by default  even we comment the above instialize name value line

//2.  =======================================================

var x = 10;
function test() {
  console.log(x);
  //   var x = 20;
  //   console.log(x);
}

test();

// 3. ==============================================
// console.log("Question 3:");
// foo();

// var foo = 4;
// function foo() {
//   console.log("hello");
// }

// foo();


// 4. ======================================

async function foo(){
    return console.log("helo");
}

var result = foo();
console.log(result);

// output result  to fix to see the result do this 
async function foo(){
    return "helo"; // Removed console.log from here so it returns the string
}

async function main() {
    var result = await foo(); // Wait for the promise to resolve
    console.log(result);      // "helo"
}

// main();


// 5. ======================================
function abc(){
console.log("inside abc");
}

const value = new abc();
console.log(value); 




// 6. ======================================



// 7. ======================================


// 8. ======================================

