class Serializable {
  serialize() {
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        const value = this[key];
        if (
          value === null ||
          typeof value === "string" ||
          typeof value === "number" ||
          (typeof value === "object" &&
            (Array.isArray(value) || value instanceof Date))
        ) {
          continue;
        } else {
          throw new Error(
            `Value is of an unsopported type: ${typeof value}, at key: ${key}`
          );
        }
      }
    }

    const obj = {
      ...this,
      className: this.constructor.name,
    };

    return JSON.stringify(obj);
  }

  wakeFrom(serialized) {
    const obj = JSON.parse(serialized);
    const className = obj.className;

    if (!className)
      throw new Error("Serialized object does not contain a class identifier.");

    return obj;
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "toolik",
  phone: "3794828400",
  birth: new Date("1999-01-02"),
});

const serialized = tolik.serialize();
console.log(serialized);

tolik = null;

const wakeUp = new UserDTO({}).wakeFrom(serialized);
console.log(wakeUp);
