interface User {
    firstName: string,
    lastName: string,
    age: number,
    middleName: string
}

// function greetUser(user:User){
//     return `Hello ${user.firstName} ${user.lastName}`;
// }

function logUserDetails(user: User) {
    console.log(`User: ${user.lastName}, ${user.middleName}, ${user.firstName}, ${user.age}`);
}

let user1 = { firstName: "maheswari", lastName: "Marimuthu", age: 16, middleName: "mahe" };

//console.log(greetUser(user1));
logUserDetails(user1);
