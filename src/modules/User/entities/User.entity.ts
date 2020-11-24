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
}
