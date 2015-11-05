# Shoutcast Ionic Tutorial
This project is the source code of a tutorial on how to build an Ionic/Phonegap Radio Player and display Song title, Cover art and any other information which is provided by the SHOUTcast stream server.

## Where to find the tutorial
The complete tutorial is published on [Medium](https://medium.com/titanium-templates/display-song-title-and-cover-by-utilizing-shoutcast-s-meta-data-fb00011cb086).

## Dependecies, Run and Build
### Install NodeJS dependencies

Run `npm install` to install all needed dependencies

### Install Javascript dependencies

Run `bower install` to install all needed dependencies.

### Run the app
Use `grunt serve -l` to run the app in browser and watch for changes in code

or

use `grunt serve` to just run the app for a browser preview

or

use `grunt serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform

```bash
$ grunt platform:add:<platform>
```

Supported Cordova platforms:

```bash
$ grunt platform:add:ios
$ grunt platform:add:android
```

### Build the app

```bash
$ grunt build
```

### Emulate the app on simulator
iOS:

```bash
$ grunt emulate:ios
```

Android:

```bash
$ grunt emulate:android
```

For more information, see [Ionic Framework Generator's instructions](https://github.com/diegonetto/generator-ionic).

### Plugins installation

Use the following commands and install the plugin required by the app:
```bash
$ cordova plugin add com.keosu.cordova.stream
```
or
```bash
$ cordova plugin add https://github.com/keosuofficial/cordova-audio-stream-plugin.git
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **com.keosu.cordova.stream** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files (https://github.com/keosuofficial/cordova-audio-stream-plugin.git).

## Further information and help
A production ready [Music Band Ionic](http://codecanyon.net/item/music-band-ionic-full-application/12044328?ref=skounis) application which demonstrates and extends everything that is described in this tutorial is available in [Codecanyon](http://codecanyon.net/item/music-band-ionic-full-application/12044328?ref=skounis). [Music Band Ionic](http://codecanyon.net/item/music-band-ionic-full-application/12044328?ref=skounis) application offers a a wide range of features, that will fit the requirements of every music band — artist, amongst them a player which makes use of SHOUTcast metadata.

## Third Party Licences
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
