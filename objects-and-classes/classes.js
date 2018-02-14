class Vehicle {
    constructor(color='red', stank='new car'){
        this.color = color;
        this.stank = stank;

    }
    drive(){
        console.log('vrrrroooommmmmmmm!!!!!!');
    }
}

const v = new Vehicle();
const v2 = new Vehicle('yello', 'old car smell');
console.log(v);
v.drive();

const vLiteral = {
    color: 'red',
    stank: 'new car'
};
console.log(vLiteral);

class truck extends Vehicle {
    constructor(color='red', stank='new stank', hasLiftKit=true){
        super(color, stank);
        this.hasLiftKit = hasLiftKit;
    }
    goMudding(){
        console.log('ssuuuueeeyyyy!!!!');
    }
    drive(){
        console.log('bbbbbaaarrrahhhhhhh!!!');
    }
}

const t = new truck();
t.drive();
t.goMudding();
console.log(t);