function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "this is the poem",
    autoStart: true,
    delay: 2,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
