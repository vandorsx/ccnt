const lightColorInput = document.getElementById("lightColor");
const darkColorInput = document.getElementById("darkColor");
const saveButton = document.getElementById("save");

// Load previously saved options or default values
chrome.storage.sync.get(["lightColor", "darkColor"], (data) => {
   lightColorInput.value = data.lightColor || "#ffffff";
   darkColorInput.value = data.darkColor || "#000000";
});

// Save options when the save button is clicked
saveButton.addEventListener("click", () => {
   const lightColor = lightColorInput.value;
   const darkColor = darkColorInput.value;

   chrome.storage.sync.set({ lightColor, darkColor }, () => {
      alert("Options saved!");
   });
});
