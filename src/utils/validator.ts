export class Validator {
  private errors: string[];
  private check: boolean;
  private args: string;

  constructor(args: string) {
    this.errors = [];
    this.check = false;
    this.args = args;
  }

  required(message: string) {
    if (this.args.trim().length === 0) {
      this.errors.push(message);
    }
    return this;
  }

  email(message: string) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(this.args)) {
      this.errors.push(message);
    }
    return this;
  }

  min(num: number, message: string) {
    if (this.args.length < num) {
      this.errors.push(message);
    }
    return this;
  }

  max(num: number, message: string) {
    if (this.args.length > num) {
      this.errors.push(message);
    }
    return this;
  }

  match(value: string, message: string) {
    if (this.args !== value) {
      this.errors.push(message);
    }
    return this;
  }

  run() {
    if (this.errors.length === 0) {
      this.check = true;
    }
    return { errors: this.errors, check: this.check };
  }
}
