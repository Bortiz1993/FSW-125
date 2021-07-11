const sum  = (a,b) => {
    return a + b
}

const subtract = (a,b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

module.exports = {
     sum,
     subtract,
     multiply,
     divide
};

//set module.exports equal to a function constructor

//function Greetr() {
  //  this.greeting = 'hello World',
  //  this.greet = function(){
  //      console.log(this.greeting);
  //  }
//}

//module.exports = Greetr