// ////////////////////////////////////////////////
// COLOR PICKER LOGIC
// ///////////////////////////////////////////////
const colorPickerButton = document.querySelector("#color-selector-add-button");
const colorsForColorPicker = [
  "#FBE114",
  "#4BEED1",
  "#13D3FB",
  "#B6ADFF",
  "#FB1467",
];

const addColorToColorPicker = (color) => {
  const colorSelectorContainer = document.querySelector(
    "[data-color-selector-container]"
  );
  const id = Math.random().toString(36).substring(2, 7);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div class="color-selector">
        <input type="radio" name="color-selector" id="${id}-color-selector" hidden>
        <label for="${id}-color-selector" class="h-5 w-5 rounded-full inline-block" style="background: ${color}"></label>
    </div>`;
  colorSelectorContainer.append(wrapper.firstChild);
};

colorPickerButton.addEventListener("click", (event) => {
  event.preventDefault();

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  addColorToColorPicker(color);
});

window.addEventListener("DOMContentLoaded", () => {
  colorsForColorPicker.forEach((color) => addColorToColorPicker(color));
});
