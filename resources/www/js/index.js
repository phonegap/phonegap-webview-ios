/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        // Test these plugins from buttons since they require interaction
        document.getElementById("orientationBtn").onclick = app.testDeviceOrientation;
        document.getElementById("compassBtn").onclick = app.testDeviceMotion;
        document.getElementById("cameraBtn").onclick = app.testCamera;
        document.getElementById("mediaBtn").onclick = app.testMediaCapture;
        document.getElementById("browserBtn").onclick = app.testInAppBrowser;
        document.getElementById("contactsBtn").onclick = app.testContacts;
        document.getElementById("deviceBtn").onclick = app.testDevice;
        document.getElementById("fileBtn").onclick = app.testFile;
        document.getElementById("filetransferBtn").onclick = app.testFileTransfer;
        document.getElementById("geoBtn").onclick = app.testGeolocation;
        document.getElementById("globalBtn").onclick = app.testGlobalization;
        document.getElementById("networkBtn").onclick = app.testConnection;
        document.getElementById("statusbarBtn").onclick = app.testStatusBar;
        document.getElementById("vibrateBtn").onclick = app.testVibration;
        document.getElementById("splashscreenBtn").onclick = app.testSplashScreen;
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
        var log = document.getElementById("log");
        log.setAttribute('style', 'display:block;width: 95%;height: 320px; position: absolute; top: 300px; left: 5px; right:5px; ');
        log.value+="DEVICE READY FIRED!!!\n\n";
    },
    testConnection: function () {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        var log = document.getElementById("log");
        log.value += 'Network Info plugin test - connection type ' + states[networkState] + '\n';
    },
    testContacts: function () {
        var log = document.getElementById("log");
        log.value += "Contacts plugin test " + navigator.contacts + '\n';
        // find all contacts with 't' in any name field
        var options = new ContactFindOptions();
        options.filter = "t";
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onSuccess, onError, options);
        function onSuccess(contacts) {
            log.value += '\tfound ' + contacts.length + ' contacts with the letter t in them '+ '\n';
        };
        function onError(contactError) {
            log.value += "\tContacts error\n";
        };
    },
    testStatusBar: function () {
        StatusBar.overlaysWebView(true);
        StatusBar.styleDefault();
        var log = document.getElementById("log");
        log.value += 'Statusbar plugin test - isVisible? ' + StatusBar.isVisible + '\n';
    },
    testDevice: function () {
        var log = document.getElementById("log");
        log.value += 'Device plugin test - platform is ' + device.platform + '\n';
    },
    testDeviceMotion: function () {
        alert("Start Device Motion plugin to get acceleration");
        var log = document.getElementById("log");
        log.value += 'Start Device Motion plugin to get acceleration\n';
        navigator.accelerometer.getCurrentAcceleration(
            function (acceleration) {
                log.value+='\tAcceleration X: ' + acceleration.x + '\n' +
                '\tAcceleration Y: ' + acceleration.y + '\n' +
                '\tAcceleration Z: ' + acceleration.z + '\n' +
                '\tTimestamp: ' + acceleration.timestamp + '\n';
            },
            function () {
                log.value+= "Accelerometer error " + error;
            });
    },
    testDeviceOrientation: function () {
        alert("Start Device orientation (compass) test ");
        var log = document.getElementById("log");
        log.value += 'Start Device Orientation plugin to get current heading\n';
        navigator.compass.getCurrentHeading(function (heading) {
                log.value+='\tCompass heading: ' + heading.magneticHeading+'\n';
            },
            function (error) {
                log.value+='\tCompass error ' + error +'\n';
            });
    },
    testFile: function () {
        log.value+='File plugin test - cordova.file: ' + cordova.file+'\n';
    },

    testGeolocation: function () {
        /* Need to set the following keys in the Info.plist to pop up the access to geolocation dialog
         <key>NSLocationAlwaysUsageDescription</key>
         <string>This app requires constant access to your location, even when the screen is off.</string>
         <key>NSLocationWhenInUseUsage</key>
         <string>This app would like to access your location.</string>
        */
        alert("Start Geolocation, get current position");
        log.value+="Start Geolocation, get current position \n";
        navigator.geolocation.getCurrentPosition(
            function (position) {
                log.value+='\tLatitude: ' + position.coords.latitude + '\n' +
                '\tLongitude: ' + position.coords.longitude + '\n' +
                '\tAltitude: ' + position.coords.altitude + '\n' +
                '\tAccuracy: ' + position.coords.accuracy + '\n' +
                '\tAltitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                '\tHeading: ' + position.coords.heading + '\n' +
                '\tSpeed: ' + position.coords.speed + '\n' +
                '\tTimestamp: ' + position.timestamp + '\n';
            },
            function (error) {
                log.value+='\tGeolocation error code: ' + error.code + '\n' + 'message: ' + error.message + '\n';
            })
    },
    testGlobalization: function () {
        log.value+="Globalization test " + navigator.globalization+"\n";

    },
    testInAppBrowser: function () {
        /* Must have app transport settings set to arbitrary load to yes in the Info.plist for your project to allow this
         <key>NSAppTransportSecurity</key>
          <dict>
              <key>NSAllowsArbitraryLoads</key>
              <true/>
          </dict>
        */
        log.value+='InAppBrowser test - open phonegap.com ' + cordova.InAppBrowser.open('http://phonegap.com', '_blank', 'location=yes')+'\n';
    },
    testVibration: function () {
        log.value+='Vibration test, 3 seconds ' +navigator.vibrate(3000)+'\n';
    },
    testSplashScreen: function () {
        log.value+="SplashScreen test " + navigator.splashscreen +"\n";
    },
    testCamera: function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA
            //sourceType : Camera.PictureSourceType.PHOTOLIBRARY]
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
            image.setAttribute('style', 'display:block;');
        }

        function onFail(message) {
            log.value+='getPicture Failed due to: ' + message +'\n';
        }

    },
    testMediaCapture: function () {
        alert("Start media capture (audio)");
        log.value+='Start Media Capture (audio)\n';
        // Start an audio capture using media capture plugin
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});

        // capture callback
        var captureSuccess = function (mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                console.log("Capture Success");
                log.value+='\tmedia Capture success \n';
            }
        };

        // capture error callback
        var captureError = function (error) {
            log.value+='Error code: ' + error.code, null, 'Media Capture Error';
        };
    },
    testFileTransfer: function () {
        var assetURL = "https://raw.githubusercontent.com/hollyschinsky/ios-webview-www/master/README.md";

        var fileName = "app-data.txt";
        var fileTransfer = new FileTransfer();
        console.log("Start file transfer");

        //The directory to store data
        var store = cordova.file.dataDirectory;

        fileTransfer.download(assetURL, store + fileName,
            function (entry) {
                log.value+="File Transfer Success!\n";
            },
            function (err) {
                log.value+="File Transfer Error "+err+"\n";
                console.dir(err)
        });
    }

};

app.initialize();



