class Serializable {
  serialize() {
    return JSON.stringify(this);
  }

  serializeValue(value) {
    if (value === null) return { type: "null", value: null };
    else if (Array.isArray(value))
      return {
        type: "array",
        value: value.map((item) => this.serializeValue(item)),
      };
    else if (value instanceof Date)
      return { type: "date", value: value.toISOString() };
    else if (typeof value === "object") {
      const serializedObject = {};
      for (let key in value) {
        if (value.hasOwnProperty(key))
          serializedObject[key] = this.serializeValue(value[key]);
      }
      return { type: "object", value: serializedObject };
    } else if (["number", "string"].includes(typeof value))
      return { type: typeof value, value: value };
    else throw new Error(`Unsopported data type: ${typeof value}`);
  }

  wakeFrom(serialized) {
    const data = JSON.parse(serialized);

    if (data.class !== this.name)
      throw new Error(
        `Cannot deserialize into ${this.name} from ${data.class}`
      );
    const props = {};
    for (let key in data.props)
      props[key] = this.deserializeValue(data.props[key]);
    return new this(props);
  }

  deserializeValue(data) {
    if (data.type === "null") return null;
    else if (data.type === "array")
      return data.value.map((item) => this.deserializeValue(item));
    else if (data.type === "Date") return new Date(data.value);
    else if (data.type === "object") {
      const obj = {};
      for (let key in data.value) {
        obj[key] = this.deserializeValue(data.value[key]);
      }
      return obj;
    } else if (["number", "string"].includes(data.type)) return data.value;
    else throw new Error(`Unsupported data type: ${data.type}`);
  }
}

class UserDTO extends Serializable {
  constructor({
    firstName = "lucas",
    lastName = "m",
    phone = "3842913",
    birth = "1999-01-01",
  }) {
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
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

tolik.printInfo();

const serialized = tolik.serialize();
console.log(serialized);
tolik = null;

// const resurrectedTolik = new Serializable.wakeFrom(serialized);
// console.log(resurrectedTolik);

// console.log(resurrectedTolik instanceof UserDTO);

// class Post extends Serializable {
//   constructor({ content, date, author }) {
//     super();

//     this.content = content;
//     this.date = date;
//     this.author = author;
//   }
// }

// console.log(new Post().wakeFrom(serialized));
