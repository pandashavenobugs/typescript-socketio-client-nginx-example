import axios from "axios";
import io from "socket.io-client";

const socket = io("http://192.168.1.62", {
  path: "/api",
});

socket.on("connection", () => {
  console.log("connected");
});

setTimeout(() => {
  getRequest();
}, 1000);

async function getRequest() {
  try {
    const response = await axios.get("http://192.168.1.62/api");
    console.log(response.data);
  } catch (error: any) {
    //console.log("error");
    console.log(error);
  }
}
