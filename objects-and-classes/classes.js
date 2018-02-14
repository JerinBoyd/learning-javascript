class Vehicle {
    constructor(color='red', stank='new car'){
        this.color = color;
        this.stank = stank;

    }
}

const v = new Vehicle();
const v2 = new Vehicle('yello', 'old car smell');
console.log(v);

const vLiteral = {
    color: 'red',
    stank: 'new car'
};
console.log(vLiteral);