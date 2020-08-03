# Socket.io Template :rocket:

## Purpose :dark_sunglasses:

The purpose of this repository is to understand how to utilize socket.io effectively later.

### User Stories :telescope:

1. Users will be able to look through the various examples and understand how to utilize socket.io well.

#### About Socket.io

- [ ] You can send and receive any events you want, with any data you want
- [ ] To send an event, implement io.emit()

```
io.on("connection", (socket) => {
  console.log("a user connected");
  // on a chat message
  socket.on("chat message", (msg) => {
    // emit the message
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
```

- [ ] in index.html

```
    // This initalizes a client, exposing io global
      var socket = io();
      $(function () {
        var socket = io();
        $("form").submit(function (e) {
          e.preventDefault();
          socket.emit("chat message", $("#m").val());
          $("#m").val("");
          return false;
        });
        // on a chat message, append li tags around the message
        socket.on("chat message", function (msg) {
          $("#messages").append($("<li>").text(msg));
        });
      });
```

## Sprint :athletic_shoe:

| Done? | Component           | Priority | Estimated Time | Actual Time |
| ----- | ------------------- | :------: | :------------: | :---------: |
| x     | This checklist      |    H     |    30 mins     |   30mins    |
| x     | Read documentation  |    M     |    30 mins     |   10mins    |
| x     | Set up basic server |    M     |    30 mins     |   15 mins   |

### Daily Stand Up :hourglass:

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Socket.io](https://socket.io/)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
