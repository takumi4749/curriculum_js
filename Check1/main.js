//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(num){
    if(num % 2 === 0){
        console.log(num + 'は偶数です');
    }
}
for(let i = 0;i < numbers.length; i++){
    isEven(numbers[i]);
}

//問２
class car{
    constructor(gas,num){
        this.gas = gas;
        this.num = num;
    }
    getNumGas(){
         console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`);
    }   
}
let gn = new car(20.5,1234)
gn.getNumGas();
