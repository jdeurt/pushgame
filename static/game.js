let socket = oi();

socket.on("message", data => {
    console.log(data);
});
