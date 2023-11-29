if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      console.log("SW Reg done", reg);
    })
    .catch((err) => {
      console.log("ERR", err);
    });
}


else console.log(navigator)
