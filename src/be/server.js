const express = require("express");
const constants = require("../consts.js");
const app = express();
var cors = require('cors')
const port = 3001;
console.log("constants", constants);
const tools = [];
const {
  UNREACHABLE_STRING,
  IDLE_STRING,
  ON_MISSION_STRING,
  TRACTOR_STRING,
  DRONE_STRING,
  CENTER,
} = constants;

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r =
        (parseFloat(
          "0." +
            Math.random().toString().replace("0.", "") +
            new Date().getTime()
        ) *
          16) |
        0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const getRandomTool = () => {
  const type = Math.random() > 0.5 ? TRACTOR_STRING : DRONE_STRING;
  const statusRandom = Math.random();
  const status =
    statusRandom > 0.66
      ? UNREACHABLE_STRING
      : statusRandom < 0.33
      ? IDLE_STRING
      : ON_MISSION_STRING;
  const myobj = {
    _id: uuidv4(),
    type,
    createdAt: "2020-03-11T17:33:53.119Z",
    updatedAt: "2020-03-11T18:33:53.119Z",
    status,
    location: {
      latitude: CENTER.lat + (Math.random()/100 - 0.005),
      longitude: CENTER.lng + (Math.random()/100 - 0.005),
      updatedAt: "2019-09-15T20:14:02.877Z",
    },
  };
  return myobj;
};

const initalizeTools = () => {
  for (let i = 0; i < constants.NUM_TOOLS; i++) {
    tools.push(getRandomTool());
  }
};
const changeTool = (tool) => {
  tool.location.latitude += (Math.random()/100 - 0.005);
  tool.location.longitude += (Math.random()/100 - 0.005);
}

initalizeTools();
setInterval(() => {
  for (let i = 0; i < constants.NUM_TOOLS; i++) {
    changeTool(tools[i]);
  }
}, 1000);

app.use(cors())

app.get("/robots", (req, res) => {
  res.json(tools);
});

app.listen(port, () => {
  console.log(`Robots app server is running at http://localhost:${port}`);
});
