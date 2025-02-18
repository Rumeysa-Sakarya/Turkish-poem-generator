function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9fbad2a6f649tea03aedob9540488afd";
  let context =
    "you are a romantic poem expert and you love to write short poems of about 2 to 8 lines. your mission is to generate a poem in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element. Do not include a title for the poem and the '```' or 'html'.";

  let prompt = `user instructions: Generate a short turkish poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
