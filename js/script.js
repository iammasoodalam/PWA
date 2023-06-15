if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", {
      scope: "./",
    })
    .then((registeration) => {
      let serviceWorker;
      if (registeration.installing) {
        console.log("installing");
      } else if (registeration.waiting) {
        console.log("waiting");
      } else if (registeration.active) {
        serviceWorker = registeration.active;
        console.log("active");
      }
      if (serviceWorker) {
        serviceWorker.addEventListener("statechange", (e) => {
          console.log(e.target.state);
        });
      }
    })
    .catch((e) => {
      console.log("Something went wrong with service worker".e);
    });
} else {
  console.log("Browser doesn't support service worker");
}
