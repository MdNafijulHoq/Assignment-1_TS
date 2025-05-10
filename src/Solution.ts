function formatString(input: string, toUpper?: boolean): string {
  if (typeof input == "string" && (toUpper === true || toUpper === undefined)) {
    return input.toUpperCase();
  } else if (typeof input == "string" && toUpper === false) {
    return input.toLowerCase();
  }
  return input;
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true)); 
console.log(formatString("Hello", false)); 

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
function filterByRating(items: { title: string; rating: number }[]) : { title: string; rating: number }[]{
    return items.filter(item => item.rating >= 4);
}
console.log(filterByRating(books)); 

function concatenateArrays<T>(...arrays: T[][]): T[]{
    const ans : T[] = [];

    arrays.forEach(array => {
        array.forEach(arr => ans.push(arr))
    })

    return ans;
    }

console.log(concatenateArrays(["a", "b"], ["c"],["d","e", "e",]));
console.log(concatenateArrays([1, 2], [3, 4], [5,6]));

class Vehicle {
    private _make: string;
    public year: number;

    constructor(make: string, year: number){
        this._make = make;
        this.year= year;
    }
    getInfo(){
        console.log(`Make: ${this._make}, Year: ${this.year}`);  
    }
}

class Car extends Vehicle{
     private _model: string;
     constructor(make: string, year: number, model: string){
        super(make, year)
        this._model = model;
     }
     getModel(){
        console.log(`Model: ${this._model}`);  
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   
myCar.getModel();  

function processValue(value: string | number): number{
    if(typeof value == "string"){
        return value.length
    } else if(typeof value == "number"){
        return value *2
    }
    return value;
}

console.log(processValue("hello")); 
console.log(processValue(10));  

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length ===  0){
        return null;
    } else {
        let maxPrice = products[0]
        for(let i=1; i<products.length; i++){
            if(products[i].price > maxPrice.price){
                maxPrice = products[i]
            }
        }
         return  maxPrice;
    }
   
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
    switch(day){
        case Day.Saturday:  {
            return  "Weekend"
        }
        case Day.Sunday:  {
            return  "Weekend"
        }
        case Day.Monday:  {
            return  "Weekday"
        }
        case Day.Tuesday:  {
            return  "Weekday"
        }
        case Day.Wednesday:  {
            return  "Weekday"
        }
        case Day.Thursday:  {
            return  "Weekday"
        }
        case Day.Friday:  {
            return  "Weekday"
        }
        default: {
            return "Invalid  Day"
        }
        
    }
}

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));


async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n<0){
                reject(new Error("Negative number not allowed"))
            } else{
                resolve(n*n)
            }
        },1000)
    })
}

squareAsync(4).then(console.log);        
squareAsync(-3).catch(console.error); 



