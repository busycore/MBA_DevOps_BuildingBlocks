import { Cipher } from "crypto";
import User from "./User.entity";

describe("User Entity test", () => {
  it("should be able to authenticate", () => {
    const newUser = new User("Joao", "abc123");

    expect(newUser.authenticate("abc123")).toBe(true);
  });

  it("should not be able to authenticate with a wrong pass", () => {
    const newUser = new User("Joao", "abc123");

    expect(newUser.authenticate("abc321")).toBe(false);
  });

  it("should be able to generate a random password", () => {
    const newUser = new User("Joao", "abc123");

    expect(newUser.generateWeakPass()).toBe("works");
  });
});
