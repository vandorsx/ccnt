const lightColorInput = document.getElementById("lightColor");
const darkColorInput = document.getElementById("darkColor");
const saveButton = document.getElementById("save");

// Load previously saved options or default values from localStorage
lightColorInput.value = localStorage.getItem("lightColor") || "#ffffff";
darkColorInput.value = localStorage.getItem("darkColor") || "#000000";

// Save options when the save button is clicked
saveButton.addEventListener("click", () => {
   const lightColor = lightColorInput.value;
   const darkColor = darkColorInput.value;

   localStorage.setItem("lightColor", lightColor);
   localStorage.setItem("darkColor", darkColor);

   alert("Options saved!");
});
