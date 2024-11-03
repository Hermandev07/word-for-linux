# <span style="color:cyan">Word</span> for  <span style="color:red">Linux</span>.

**Word for Linux** is a lightweight web-based application that simulates a Microsoft Word experience on Linux. This project brings familiar document editing tools in a streamlined, Electron-powered desktop app optimized for Linux users.

## Features

- **Familiar Word-like Interface**: Provides a user-friendly interface that resembles Microsoft Word.
- **Cross-platform Support**: Built with Electron, allowing the app to run seamlessly on Linux.
- **Standalone AppImage**: Distributed as an AppImage, making it easy to install and run on Linux without additional dependencies.

## Installation

1. **Download the AppImage**  
   Head to the [Releases](https://github.com/Hermandev07/word-for-linux/releases) page of this repository and download the latest `.AppImage` file.

2. **Make the AppImage Executable**  
   Run the following commands to make the AppImage file executable and start the app:

   ```bash
   chmod +x word-for-linux-1.0.0.AppImage
   ./word-for-linux-1.0.0.AppImage
   ```

## Development Setup

If you'd like to make modifications to the code or build the application yourself, follow these steps.

### Prerequisites

**Node.js and npm** Download and install from Node.js official website.
**Electron** Install Electron globally if not already installed.

**Clone the Repository**

```bash
git clone https://github.com/YourUsername/word-for-linux.git
cd word-for-linux;
```

**Install Dependencies**
Run the following command to install project dependencies
```bash 
npm install
```
**Build the App for Linux**

To create an AppImage build
```bash
npm run build
```
if you get an error try running this
```bash
npm run build -- --linux
```
The build files will be located in the dist directory

## Usage

After downloading or building the AppImage, run the app to get started with a Word-like editing experience. You can use it to create, edit, and save text documents directly from your Linux desktop.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with any improvements or features.

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE.md) file for details.

## Contact
If you have any questions or need further assistance, please don't hesitate to reach out. you can reach out at hermanbrenn@gmail.com

