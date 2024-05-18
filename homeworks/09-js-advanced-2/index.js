class Serializable {
  serialize() {
    this.serializeValidation(this);

    const obj = {
      ...this,
      className: this.constructor.name,
    };

    return JSON.stringify(obj);
  }

  serializeValidation(value) {
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const current = value[key];
        if (
          current === null ||
          typeof current === "string" ||
          typeof current === "number" ||
          current instanceof Date
        ) {
          continue;
        } else if (Array.isArray(current)) {
          for (let curr of current) {
            this.serializeValidation({ [key]: curr });
          }
        } else if (typeof current === "object") {
          this.serializeValidation(current);
        } else {
          throw new Error(
            `Value is of an unsopported type: ${typeof current}, at key: ${key}`
          );
        }
      }
    }
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

// ---------- correct example ---------
let tolik = new UserDTO({
  firstName: "Lucas",
  lastName: "Montecino",
  phone: "3794828400",
  birth: new Date("1999-01-02"),
});

const serialize = tolik.serialize();
// console.log(serialize);

tolik = null;
const wakeUp = new UserDTO({}).wakeFrom(serialize);
// console.log(wakeUp);

// --------- wrong example ----------

let firstBadTolik = new UserDTO({
  firstName: ["Javier", "Hector", undefined],
  lastName: "Montecino",
  phone: "3794828400",
  birth: new Date("1999-01-02"),
});

// const secondSerialize = firstBadTolik.serialize();

// ----------- check for object values --------------

let otherTest = new UserDTO({
  firstName: ["Juan", "Guillermo"],
  lastName: { first: "Tell", second: "Montes" },
  phone: "3794828400",
  birth: new Date("1999-01-02"),
});

const thirdSerialize = otherTest.serialize();
// console.log(thirdSerialize);

otherTest = null;

const wakeUp2 = new UserDTO({}).wakeFrom(thirdSerialize);
// console.log(wakeUp2);

// ---------wrong example #2----------

let anotherBadTolik = new UserDTO({
  firstName: ["Juan", "Guillermo"],
  lastName: { first: "Tell", second: undefined },
  phone: "3794828400",
  birth: new Date("1999-01-02"),
});

// const fourthSerialize = anotherBadTolik.serialize();
