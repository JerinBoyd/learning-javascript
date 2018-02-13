// lets create a circle object
const circle = {
    radius: 10, 
    color: 'red',
    x: 10,
    y: 10,
    changeColor: function(newColor){
        circle.color = newColor;
    },
    grow: function(){
        this.radius += 1;
    },
    shrink: function(){
        this.radius -= 1;
    },
    // move: function(moveX){
    //     circle.x = += 1;
    // }
    move: function(dx, dy){
       this.x += dx;
       this.y += dy;
    }

    
};

console.log(circle);
circle.changeColor('chartrueuse');
console.log(circle);
circle.shrink();
console.log(circle);
circle.grow();
console.log(circle);
circle.move(10, 10);
console.log(circle);
console.log(this);
