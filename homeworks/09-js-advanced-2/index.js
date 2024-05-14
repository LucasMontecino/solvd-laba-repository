class Serializable {
  serialize() {
    const data = {
      class: this.constructor.name,
      props: {},
    };

    for (let key in this) {
      if (this.hasOwnProperty(key) && this[key] !== undefined) {
        data.props[key] = this.serializeValue(this[key]);
      }
    }
    return JSON.stringify(data);
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
