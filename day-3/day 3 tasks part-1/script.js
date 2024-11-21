// Library
class Book {
    title;
    author;
    isbn;
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    checkout(){
console.log("the book checked out")
    }
    returnBook(){
console.log("the book was returned")
    }
    updateTitle(newTitle){
       this.title=newTitle;
    }
}
var b1=new Book("name1","Durga","100");
b1.checkout();
b1.returnBook();
b1.updateTitle("updatedName");
console.log(b1);

// E-commerce

class product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
        this.price=amount;
        console.log(this.price,"discount has  applied");
    }
    afterDiscount(amount){
        this.price=amount;
console.log("after discount amount is",this.price);
    }
}
var product1=new product("meera",150,"shampoo");
product1.applyDiscount(20);
product1.afterDiscount(120);
console.log(product1);

// Bank Account System

class bankAccount {
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName, accountNumber, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        this.deposit=amount+this.balance;
        console.log("The amount was deposited",this.balance);
    }
    withDraw(amount){
   this.withDraw=this.balance-amount;
   console.log(this.balance,"amount has been withdrawable");
    }
    getBalance(){
   this.currentBalance=this.deposit;
   console.log("The currentBalance is ")
    }
}
var holder1=new bankAccount("Durga",1182214680908,20000);
holder1.deposit(10000);
holder1.withDraw(3000);
holder1.getBalance(7000);
console.log(holder1);
console.log("--------------------------------------");
var holder2=new bankAccount("vanitha",1182214680911,100000);
holder2.deposit(100000);
holder2.withDraw(50000);
holder2.getBalance(50000);
console.log(holder2)

// vehicle Management

class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        this.increasedMileage=miles;
        console.log("the mileage got increased",this.increasedMileage);
    }
    getmileage(){
        this.newMileage=this.mileage+this.increasedMileage;
        console.log("the mileage of vehicle is",this.newMileage);  
    }
}
var royalEnifiled=new Vehicle("classic","TS07EB6840",350);
royalEnifiled.drive(250);
royalEnifiled.getmileage();
console.log(royalEnifiled);

// Grading System

class Student{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
    }
    getGrade(){
        console.log("The current grade is",this.grade);
    }
}
var s1=new Student("Durga","A");
s1.setGrade("O");
s1.getGrade();
console.log(s1);
