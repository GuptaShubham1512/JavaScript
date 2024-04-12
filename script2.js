console.log("Hello I am conditional Turorial")

let age=1;
let grace=2;

age +=grace
console.log(age)
console.log(age+grace)
console.log(age-grace)
console.log(age%grace)
console.log(age/grace)
console.log(age**grace)


if(age==18){
    console.log("you can Drive");
}
else if(age==0){
    console.log("Are u kidding")
}
else if(age==1){
    console.log("again u are kidding")
}
else{
    console.log("you cannot Drive");
}


a=6;
b=8;
let c=a>b?(a-b):(b-a);
/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/