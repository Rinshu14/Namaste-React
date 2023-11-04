// function sum(userName) {

//     this.name=userName
//     console.log(this)
//     console.log("sum called")

// }
// //  console.log(sum.prototype);
// //  console.log(sum.prototype.__proto__);
// // sum.prototype.myName="Rinshu";
// //console.log(sum.prototype);

// function user(userName,loggedInCount,isSigendIn)
// {

//   //sum.call(this,userName);
//   this.userName=userName;
//   this.loggedInCount=loggedInCount;
//   this.isSigendIn=isSigendIn;
//  /// console.log(this);
//  this.getUserName=function (){
//   return this.userName;
//  }
//   return this;

// }

// user.prototype.getLoggedInCount=function(){
//   return this.loggedInCount;
// }
//console.log(user.prototype);
// // Function.prototype.myName="Rinshu";

// // let user1= user("seeta",8,true);
//  let user2=new user("geeta",6,false);
//  console.log(user2)
//  console.log(user2.getLoggedInCount());
//  console.log(user2.getUserName());

class user {
  constructor(userName, loggedInCount, isSigendIn) {
    this.userName = userName;
    this.loggedInCount = loggedInCount;
    this.isSigendIn = isSigendIn;
  }

  getUserName() {
    return this.userName;
  }

  getLoggedInCount() {
    return this.loggedInCount;
  }
}

class primeMember extends user
{
  constructor(userName, loggedInCount, isSigendIn, isMember) {
    super(userName, loggedInCount, isSigendIn);
    this.isMember=isMember;
  }
  getIsMember(){
    return this.isMember;
  }
 static getcheck(){
    return true;
  }
}
let user2 = new primeMember("geeta", 6, false,true);
console.log(user2.userName)
console.log(user2)
console.log(user2.__proto__);
console.log( user2.__proto__.constructor.getcheck());
// console.log(user2.getLoggedInCount());
// console.log(user2.getUserName());
// console.log(user2.getIsMember())







// const employee = {
//   name: "Rinshu",
//   empid: "2073753",
// };
// const married = {
//   isMarried: false,
// };

// const desgination = {
//   desgnation: "Developer",
// };
// console.log(Object.getPrototypeOf(desgination))
// console.log(desgination.__proto__)
// desgination.__proto__=married;
// console.log(desgination.__proto__)
// console.log(desgination.desgnation)
// console.log(desgination.isMarried)
