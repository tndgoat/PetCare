export class Validate {
  static email = (val: string) => {
    return val.length >= 6;
  };

  static password = (val: string) => {
    return val.length >= 6;
  };
}
