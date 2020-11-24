import User from "./modules/User/entities/User.entity";

const user = new User("Joao", "213");

console.log(user.generateWeakPass());
