// Try to retrieve stored colors from localStorage synchronously
try {
   const lightColor = localStorage.getItem("lightColor") || "#ffffff";
   const darkColor = localStorage.getItem("darkColor") || "#000000";

   // Update the CSS custom properties immediately
   document.documentElement.style.setProperty("--light-bg", lightColor);
   document.documentElement.style.setProperty("--dark-bg", darkColor);
} catch (e) {
   // In case of an error, fall back to defaults.
   console.error("Error setting colors:", e);
}
