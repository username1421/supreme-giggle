// One
widget.on("one", () => {
  console.log("One", widget);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "1") {
    widget.emit("one");
  }
});

// Two
widget.on("two", () => {
  console.log("Two", widget);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "2") {
    widget.emit("two");
  }
});

// Three
widget.on("three", () => {
  console.log("Three", widget);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "3") {
    widget.emit("three");
  }
});
