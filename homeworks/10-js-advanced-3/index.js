// 1 https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

function validateMessage(msg) {
  let htmlValidation = /[<>]/g;

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
}

// 2 https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const result = await response.json();
  if (!result.hasOwnProperty("jokes"))
    throw new Error(`No jokes at url: ${apiUrl}`);

  const joke = result.jokes.find((item) => item.id === jokeId);

  if (!joke) throw new Error(`No jokes found id: ${jokeId}`);

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}
