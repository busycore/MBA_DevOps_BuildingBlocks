import User from "./modules/User/entities/User.entity";

console.log("Starting the program");
const user = new User("Joao", "213");

console.log(user.generateWeakPass());
