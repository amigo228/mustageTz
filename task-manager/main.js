const { app, BrowserWindow } = require('electron');
const path =  require('path');
function createWindow () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    window.webContents.openDevTools();
    window.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow);