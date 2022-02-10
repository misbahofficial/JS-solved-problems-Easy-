// Prime Number Checker by Misbah Ahmed.

let userNumber = 97; // the number from the user;

let count = 0; // for keeping track if a number is divisible other than 1 and itself;


// if a Number is divisible by any number but 1 and the nummber itself, we call that number a Prime Number;
// Here divisible means after dividing the number, the remainder should be 0;

for (let i=2; i<userNumber-1; i++){
    if (userNumber%i == 0){
        count++;
    }
}

if (count > 0){
    console.log("Your given Number is not a Prime Number");
}else{
    console.log("Your given Number is a Prime Number");
}