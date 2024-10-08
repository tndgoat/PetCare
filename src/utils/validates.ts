export class Validate {
  static email = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  static password = (password: string) => {
    return password.length >= 6;
  };
}
