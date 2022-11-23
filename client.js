const net = require("net");

const host = '165.227.47.243';
const port = 50541;

const connectionConfig = {
  host,
  port
};

const connect = function() {
  const conn = net.createConnection(connectionConfig);

  conn.on("data", (message) => {
    console.log("Server says: ", message);
  });
  conn.on("connect", (message) => {
    console.log("Successfully connected to the game server.");
    conn.write("Name: AGD");
    

  });
  
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
