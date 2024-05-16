// 1 https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

function validateMessage(msg) {
  let htmlValidation = /[<>]/g;

  try {
    if (msg === null) throw new ReferenceError("Message is null!");
    if (typeof msg !== "string")
      throw new TypeError(
        `Message should be of type string but was of type ${typeof msg}!`
      );

    if (msg.length > 255 || msg.length == 0)
      throw new RangeError(`Message contains ${msg.length} characters!`);

    if (msg.match(htmlValidation) && msg.match(htmlValidation).length > 1)
      return false;

    return true;
  } catch (error) {
    console.log(error.name, error.message);
  }
}

// 2 https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId) {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data.jokes);

    let jokes = data.jokes.map((joke) => {
      return {
        id: joke.id,
        setup: joke.setup || "There is no setup",
        punchLine: joke.delivery || "There is no punchline",
      };
    });

    let joke = jokes.find((item) => item.id === jokeId);

    console.log(joke);
  } catch (error) {
    console.log(error.name, error.message);
  }
}

let user = await sayJoke("https://v2.jokeapi.dev/joke/Any?amount=10", 70);

let newUser = { name: "lucas", title: user };
console.log(newUser);
