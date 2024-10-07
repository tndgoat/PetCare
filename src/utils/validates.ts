export class Validate {
  static username = (val: string) => {
    return val.length >= 6;
  };

  static password = (val: string) => {
    return val.length >= 6;
  };
}
