self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("it-app-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css"
      ]);
    })
  );
});