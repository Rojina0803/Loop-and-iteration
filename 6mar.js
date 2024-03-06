//error object
try{
    rojeeee
}
catch(error){
        // console.log("error");
        console.log(error.name);
        console.log(error.message);
}

try{
    console.log("BLAHHHHHH");
    // throw new error("Dune is good");
        throw new ReferenceError("Dune is good");
    
}
catch(error){
    // console.log("error");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try{
    let=prompt("Enter your age");
    // throw new error("Dune is good");
    if(age<130){
        throw new ReferenceError("This is probably not true");
    }
            

}
catch(error){
    // console.log("error");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
loop and iteration
for
while
do while
for...in
for...of
label

for
for (let step = 0; step < 5; step++) {

    console.log("Walking east one step");}

 do..while
 let i=0;
 do{
    console.log("I'm gonna be out anyway");
 }
 while(i<5);{
    console.log("Hah");
 }

let i=5;
do{
    i+1;
}
while(i<5);{
    console.log(i)
}


While loop
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n)
}

while (true) {
    console.log("Hello, world!");
  } //infinnite loop

label statements
let num=[
    [22,33,44,66],
    [22,33,44,55,66],
    [22,33,43,56,78,90]
];
for(let i=0;i<num.length; i++){
    for(let j=0;j<num.length; j++){
        console.log(num[i][j]);
        if(num[i][j]===90){
                console.log("You found the value");
           
        }
        console.log("~~~~~~~~~")
    }

 }

const width= 3;
const height= 4;

outerLoop:
for(let x=1; x<=width; x++){
    for(let y=1; y<=height;y++){
        if(x==2&& y==2){
            break outerLoop;
        }
        console.log(`${x},${y}`);
    }
}





