
= Supports
================
- IOS
- Android
- Windows Phone (in 2016)


Requirements
================
- Node.js (v5 and above)

### Android

- (Android) JDK 7 or later
- Apache Ant (for builds)
- Android SDK

### Apple

- You need a MAC :-(
- And other stuff	 

Installation
===============

- Open a command prompt (with admin permission)
- Install [Chocolately](https://chocolatey.org/) - it's just easier that way!
- Install JDK
	- choco install jdk8
	- **CHANGE TO YOURS** 
		- SETX JAVA_HOME "c:\Program Files\Java\jdk1.8.0_72" /M
- Install Android SDk
	- choco install android-sdk
	- **CHANGE TO YOURS** 
		- SETX ANDROID_HOME "c:\Program Files (x86)\Android\android-sdk" /M
	- Restart your command prompt
- Install Android SDKs and Android Support Repository (nah, me neither)
	- echo yes | "%ANDROID_HOME%\tools\android" update sdk --filter tools,platform-tools,android-22,build-tools-22.0.1,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
- Optionally install Genymotion
- Install the NativeScript CLI
	- npm install -g nativescript
	- tns doctor
	- !!!DONE!!!
	
	
Install nodejs v5 seemed to break stuff, had to uninstall, then clear the "Program Files\nodejs" directory, then install afresh

Scaffold version
================

tns create demo
cd demo
tns platform add android

// TAKES AGES! 2m for the demo on first start
// Second run was 20secs
tns run android 	
	OR
tns run android --emulator

tns run android --genny

Development
===============
 - Sample is .js - dunno yet if TypeScript is supported (it is as an add-on, see below)
 - UI expressed in .XML files
 

Development with ag2
=======================
- npm install                     // 2 minutes
- tns platform add android        // 2 seconds
- tns run android                 // 1:30 minute for initial build (on device, not emulator) 
- tns debug android               // works, brings up chrome debugger, breakpoints work, etc 

Resources
===========

- [Getting started page](http://docs.nativescript.org/getting-started)
- [Getting started video](https://www.youtube.com/watch?v=rsCT5fpES4Q)


Emulator setup
==============
http://developer.telerik.com/featured/using-android-emulator-hybrid-mobile-apps-telerik-appbuilder
Open "C:\Program Files (x86)\Android\android-sdk\SDK Manager.exe"
Tick "Android 4.4.2 (API 19)"
	+ SDK Platform
	+ ARM EABI v7a System Image
	+ Intel x86 Atom System Image
Untick the other "Android X.XX" options (less to install)
Install changes
Whilst that's processing, install this:
	- https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager
		(speeds up the emulator ... apparantley)
- Disable Hyper V in Windows options (I didn't have it available)
Open "C:\Program Files (x86)\Android\android-sdk\AVD Manager.exe"
Create a Nexus4 AVD as outlined in the article above		
Highlight Nexus4 and select launch
at command prompt, run "tns run android --emulator"
... and wait ...





Random Thoughts
==================
- Enable developer tools
- Tick "Install from unknown sources" in Developer options.
- Disable anti-virus on phone to install
- Check AV software hasn't turned off "install from unknown sources"

