// Prototype 상속

function Person() {}

Person.prototype.hello = function() {
    console.log("hello");
};


function Korean(region){
    this.region = region;
    this.where = function() { console.log("where", this.region);};
}

Korean.prototype = Person.prototype;

const k = new Korean("inchen");

k.hello();
k.where();