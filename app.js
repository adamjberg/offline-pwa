if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceworker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed:", err);
    });
}

window.addEventListener("load", function () {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  div.innerText = "Hello World";
  root.append(div);
});
