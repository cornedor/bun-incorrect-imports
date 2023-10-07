import * as Socket from "./Socket.js";
import * as Utils from '../lib/utils.js';

Utils.random()

Socket.socket.addEventListener("open", (function (param) {
  console.log("Socket  open");
  var str = JSON.stringify({
    e: "ping"
  });
  if (str !== undefined) {
    Socket.socket.send(str);
    return;
  }

}));

let pageInfoElem$1 = 1

export {
  pageInfoElem$1 as pageInfoElem,
}
