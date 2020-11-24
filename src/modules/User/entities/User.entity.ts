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

  public generateWeakPass(): any {
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from("11111111111111111111111111111111"),
      iv
    );
    return cipher; // Noncompliant: DES / 3DES is unsecure Noncompliant: DES / 3DES is unsecure
  }
}
