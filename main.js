// Copyright (c) 2019 Beta Kuang
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { app, BrowserWindow } = require('electron')
const ElectronReload = require('electron-reload')
const path = require('path')
const url = require('url')

ElectronReload(__dirname)

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(url.format({
    protocol: 'file',
    pathname: path.join(__dirname, 'dist', 'index.html'),
    slashes: true,
  }))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
app.on('ready', createWindow)
