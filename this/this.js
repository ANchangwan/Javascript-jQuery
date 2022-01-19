// 객체 리터럴
const circle = {
    radius:10,
    getDiameter(){
        //this는 메서드를 호출한 객체(circle)를 가르킨다
        return 3 * this.radius;
    }
};

console.log(circle.getDiameter()); //30

// 생성자 함수
function Circle(radius){
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
};

Circle.prototype.getDiameter = function(){
    return 5 * this.radius;
}

// 인스턴스 생성
const circle = new Circle(8);
console.log(circle.getDiameter()); // 40