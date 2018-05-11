"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var socket_manager = require("./SocketManager");
// setup webserver to serve files from ~/Bela/IDE/public
var app = express();
var server = new http.Server(app);
app.use(express.static('public'));
function init() {
    console.log('starting IDE');
    // start serving the IDE on port 80
    server.listen(80, function () { return console.log('listening on port', 80); });
    // initialise websocket
    socket_manager.init(server);
}
exports.init = init;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFDbkMsMkJBQTZCO0FBQzdCLGdEQUFrRDtBQUVsRCx3REFBd0Q7QUFDeEQsSUFBTSxHQUFHLEdBQXdCLE9BQU8sRUFBRSxDQUFDO0FBQzNDLElBQU0sTUFBTSxHQUFnQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFbEM7SUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTVCLG1DQUFtQztJQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsRUFBcEMsQ0FBb0MsQ0FBRSxDQUFDO0lBRS9ELHVCQUF1QjtJQUN2QixjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFSRCxvQkFRQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBzb2NrZXRfbWFuYWdlciBmcm9tICcuL1NvY2tldE1hbmFnZXInO1xuXG4vLyBzZXR1cCB3ZWJzZXJ2ZXIgdG8gc2VydmUgZmlsZXMgZnJvbSB+L0JlbGEvSURFL3B1YmxpY1xuY29uc3QgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xuY29uc3Qgc2VydmVyOiBodHRwLlNlcnZlciA9IG5ldyBodHRwLlNlcnZlcihhcHApO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpe1xuXHRjb25zb2xlLmxvZygnc3RhcnRpbmcgSURFJyk7XG5cblx0Ly8gc3RhcnQgc2VydmluZyB0aGUgSURFIG9uIHBvcnQgODBcblx0c2VydmVyLmxpc3Rlbig4MCwgKCkgPT4gY29uc29sZS5sb2coJ2xpc3RlbmluZyBvbiBwb3J0JywgODApICk7XG5cblx0Ly8gaW5pdGlhbGlzZSB3ZWJzb2NrZXRcblx0c29ja2V0X21hbmFnZXIuaW5pdChzZXJ2ZXIpO1xufVxuIl19