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
