const { app, BrowserWindow, Tray, Menu, Notification, nativeImage, screen } = require('electron');
const path = require('path');

let mainWindow;
let tray;

function createWindow() {
    // Get the primary screen's dimensions
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        icon: path.join(__dirname, 'src/icon.png'),  // Optional: add a custom icon
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    // Load Microsoft Word Online
    mainWindow.loadURL('https://office.live.com/start/Word.aspx');

    // Minimize to tray when the window is closed
    mainWindow.on('close', (event) => {
        if (!app.isQuitting) {
            event.preventDefault();
            mainWindow.hide();
        }
        return false;
    });

    mainWindow.on('minimize', (event) => {
        event.preventDefault();
        mainWindow.hide();
        showTrayNotification();
    });
}

// Create a system tray icon with menu
function createTray() {
    const iconPath = path.join(__dirname, 'src/tray-icon.png');  // Add your tray icon path
    tray = new Tray(iconPath);

    const trayMenu = Menu.buildFromTemplate([
        { label: 'Show App', click: () => mainWindow.show() },
        { label: 'Quit', click: () => {
            app.isQuitting = true;
            app.quit();
        }}
    ]);

    tray.setToolTip('Word for Linux');
    tray.setContextMenu(trayMenu);

    tray.on('click', () => {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
    });
}

// Display a notification when the app is minimized to tray
function showTrayNotification() {
    const icon = nativeImage.createFromPath(path.join(__dirname, 'src/icon.png'));
    new Notification({
        title: 'Word for Linux',
        body: 'The app is still running in the background.',
        icon: icon
    }).show();
}

app.on('ready', () => {
    createWindow();
    createTray();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});