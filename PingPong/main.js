const electron = require("electron");
const app = electron.app;
const browserWin = app.BrowserWindow;


function createWin() {
    
    var mainWin = browserWin.createWindow({width:1024, height:768});
    
    mainWin.loadURL("./PingPong.html");
    
    mainWin.on("closed", function () {
        
        console.log("Application terminated");
        app.quit();
        
    });
 
}

  app.on("ready", createWin);