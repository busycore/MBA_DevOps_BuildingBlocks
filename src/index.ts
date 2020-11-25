import { exec } from "child_process";
import User from "./modules/User/entities/User.entity";

console.log("Starting the program");
const user = new User("Joao", "213");

console.log(user.generateWeakPass());

exec("cat");

exec("http://localhost:80/");

exec("http://www.google.com:80/");
