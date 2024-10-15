// function greetUser(user:User){
//     return `Hello ${user.firstName} ${user.lastName}`;
// }
function logUserDetails(user) {
    console.log("User: ".concat(user.lastName, ", ").concat(user.middleName, ", ").concat(user.firstName, ", ").concat(user.age));
}
var user1 = { firstName: "maheswari", lastName: "Marimuthu", age: 16, middleName: "mahe" };
//console.log(greetUser(user1));
logUserDetails(user1);
