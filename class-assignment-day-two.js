var varNumber = 50;
const constNumber =10;
let letNumber = 30;


function print(){
    const sq = constNumber * constNumber;
    console.log("inside function: ")
    console.log(varNumber);
    console.log(constNumber);
    console.log(letNumber);

    if(sq > 0){
        letNumber = 23;
        varNumber = 11;
        console.log("Inside if: ");
        console.log(letNumber);
        console.log(varNumber);
    }
    console.log("inside function outside if: ")
    console.log(varNumber);
    console.log(constNumber);
    console.log(letNumber);

}


print();