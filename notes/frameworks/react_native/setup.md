# Setting up React Native (OSX)

## iOS

### Things to Install/update
1. xcode (MAKE SURE TO UPDATE)
    - if new install, open app and install additional components
2. Homebrew (download from website)
3. Node/NPM ```brew install npm```
4. watchman ```brew install watchman```
5. React Native cli ```npm install -g react-native-cli```
6. ESlint ```npm install -g eslint```

### Starting the Project
```react-native init <project name>```

### Running the App
(with emulator running) ```react-native run-ios```


## Android

### Things to Install/Update
1. Download Android Studio
    - drag into Applications folder
    - open
    - in the installation wizard, select Custom installation
        + make sure both Performance and Android Virtual Device are checked

2. Setup Paths
    - edit your bash profile to provide paths to the Android SDK:
        + ```nano ~/.bash_profile``` (opens bash_profile in the in-terminal nano editor)
        + paste this code to the bottom of the file:
            ```
                # Android SDK
                export ANDROID_HOME=~/Library/Android/sdk
                export PATH=${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools
            ```
        + Save and close (ctrl + x, yes, enter)
        + ```source ~/.bash_profile```
        + NOTE: the 'android' command is deprecated

3. Install JDK (Java Developer Kit) for Mac OSX
    - go to http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    - scroll to first Development Kit box
    - accept license agreement
    - download for Mac OSX

4. Install the Extras
    - Google Play Services
        - open Android Studio > Configure > SDK Manager
        - go to the middle 'SDK Tools' tab > Click ‘Show Package Details’ (bottom right)
        - Click ‘Google Play Services’, then hit apply and follow the instructions to download/install it
    
    - tutorials said to install more stuff, but a lot of the instructions are deprecated

    - In Android Studio, open any project (new or existing) to access the toolbar
    - in the new window that pops up after configuring, click on the purple screen icon in the top right (AVD Manager)
    - add a new virtual device, (Nexus 5 is fine)
        + I downloaded oreo v 26 for my images, other options might also work
    - double-click the device to open
    - wait for the emulater to load, then run:
    - ```react-native run-android```

### Running the App
(with emulator running) ```react-native run-android```
