class Singleton {
     static counter=0;
   
    constructor(data) {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        else {
            Singleton.instance = this;
            this.data = data;
            Singleton.counter+=1;
        }

    }
   static displayCount() {
        return Singleton.counter;
    }
}

let s1 = new Singleton("data1")
let s2 = new Singleton("data2")
let s3= new Singleton("data3")
let s4= new Singleton("data4")
console.log(Singleton.displayCount());
