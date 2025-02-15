chrome.storage.sync.get(["lightColor", "darkColor"], (result) => {
  if (result.lightColor) {
    document.documentElement.style.setProperty("--light-bg", result.lightColor);
  }
  if (result.darkColor) {
    document.documentElement.style.setProperty("--dark-bg", result.darkColor);
  }
});
