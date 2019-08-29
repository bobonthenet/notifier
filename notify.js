const notifier = require("node-notifier");
const path = require("path");

const looptime = 20 * 60 * 1000;
const repeats = 3;
const myMessage = "Hey! It is time to get up and walk around now.";

notifier.notify({
    title: "Initial notification!",
    message: 'Further notifications will be sent after the looptime interval.',
    sound: true,
    contentImage: path.join(__dirname, "walk.png"),
    icon: path.join(__dirname, "walk.png"),
    wait: false
  },
  function (err, response, metadata) {
    if (err) {
      console.log(err);
    } else {
      console.log('I\'m just doing my thing, you can minimize the console...')
    }
  });

(function myLoop(i) {
  setTimeout(function () {
    notifier.notify({
        title: "Do the thing!",
        message: myMessage,
        sound: true,
        contentImage: path.join(__dirname, "walk.png"),
        icon: path.join(__dirname, "walk.png"),
        wait: true
      },
      function (err, response, metadata) {
        if (err) {
          console.log(err);
        } else {
          return;
        }
      }
    );
    if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
  }, looptime);
})(repeats);