import crypto from "crypto";

export default class User {
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  private name: string;
  private password: string;

  public authenticate(pass: string): boolean {
    return pass === this.password;
  }

  //This is as weak implementation UNCOMENT TO MAKE IT POINTS IT
  public generateWeakPass(): string {
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from("11111111111111111111111111111111"),
      iv
    );
    return "works";
  }

  //-------------------------------------------------------

  //It will throw a code smell
  public async UngracefullCode(): Promise<void> {
    let x = 1;
    await x;
  }
}
