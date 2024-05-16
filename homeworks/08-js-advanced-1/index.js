// 1. Pluck

function pluck(user, str) {
  if (!user) return null;
  if (!str) return user;
  let coder = str.split(".");

  let value = user;

  for (let code of coder) {
    if (value[code] !== undefined) {
      value = value[code];
    } else {
      return null;
    }
  }

  return value;
}

// 2. Deep Clone

function clone(obj) {
  let deepCpyObj = structuredClone(obj);
  return deepCpyObj;
}

// 3. "A long time ago"

function offset(date) {
  let currentDate = new Date();
  let dateTime = date.getTime();
  let currentDateTime = currentDate.getTime();

  const diffMilliseconds = currentDateTime - dateTime;
  const diffSeconds = Math.floor(diffMilliseconds / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  let result = "";

  if (diffDays > 0) {
    result += `${diffDays} day${diffDays > 1 ? "s" : ""} `;
  }

  if (diffHours % 24 > 0) {
    result += `${diffHours % 24} hour${diffHours % 24 > 1 ? "s" : ""} `;
  }

  if (diffMinutes % 60 > 0) {
    result += `${diffMinutes % 60} minute${diffMinutes % 60 > 1 ? "s" : ""} `;
  }

  result += `ago`;
  return result.trim();
}

// 4. Random Dates

function randomDate(startDate, endDate) {
  const startTimestamp = new Date(startDate).getTime();
  const endTimestamp = new Date(endDate).getTime();

  if (startTimestamp > endTimestamp) {
    throw new Error("The start date must be before the end date");
  }

  const randomTimestamp =
    Math.random() * (endTimestamp - startTimestamp) + startTimestamp;

  return new Date(randomTimestamp);
}

// 5 https://www.codewars.com/kata/merged-objects

function objConcat(o) {
  let mergedObject = {};

  o.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      mergedObject[key] = obj[key];
    });
  });

  return mergedObject;
}

// 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  let _firstName = first;
  let _lastName = last;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return _firstName;
    },
    set: function (newFirstName) {
      _firstName = newFirstName;
      this.fullName = `${_firstName} ${_lastName}`;
    },
  });

  Object.defineProperty(this, "lastName", {
    get: function () {
      return _lastName;
    },
    set: function (newLastName) {
      _lastName = newLastName;
      this.fullName = `${_firstName} ${_lastName}`;
    },
  });

  Object.defineProperty(this, "fullName", {
    get: function () {
      return `${_firstName} ${_lastName}`;
    },
    set: function (newFullName) {
      const parts = newFullName.split(" ");
      if (parts.length === 2) {
        _firstName = parts[0];
        _lastName = parts[1];
      }
    },
  });

  this.fullName = `${_firstName} ${_lastName}`;
}
