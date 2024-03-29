
const socket = io();
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;
var peer = new Peer(`${Math.floor(Math.random() * 2 ** 18)
    .toString(36)
    .padStart(4, 0)}`, {
path: "/myapp",
port:9000,
host: "localhost",
});
window.peer=peer;
let myVideoStream;
navigator.mediaDevices.getUserMedia({
audio: true,
video: true,
})
.then((stream) => {
myVideoStream = stream;
addVideoStream(myVideo, stream);
peer.on("call", (call) => {
call.answer(stream);
const video = document.createElement("video");
call.on("stream", (userVideoStream) => {
addVideoStream(video, userVideoStream);
});
});
socket.on("user-connected", (userId) => {
connectToNewUser(userId, stream);
});
});
const connectToNewUser = (userId, stream) => {
const call = peer.call(userId, stream);
const video = document.createElement("video");
call.on("stream", (userVideoStream) => {
addVideoStream(video, userVideoStream);
});
};
peer.on("open", (id) => {
socket.emit("join-room", ROOM_ID, id);
});
const addVideoStream = (video, stream) => {
video.srcObject = stream;
video.addEventListener("loadedmetadata", () => {
video.play();
videoGrid.append(video);
});
};