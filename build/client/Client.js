import {
socket
} from "Socket.js";
import {
random
} from "../chunk-7081481d2a14c2d9.js";

// client/Client.js
random();
socket.addEventListener("open", function(param) {
  console.log("Socket  open");
  var str = JSON.stringify({
    e: "ping"
  });
  if (str !== undefined) {
    socket.send(str);
    return;
  }
});
var pageInfoElem$1 = 1;
export {
  pageInfoElem$1 as pageInfoElem
};
