
Pod::Spec.new do |s|

  s.name         = "Cordova"
  s.version      = "4.4.0"  
  s.summary      = "Cordova iOS"
  
  s.description  = <<-DESC "Apache Cordova is a platform for building native mobile applications using HTML, CSS and JavaScript."
  DESC
  
  s.homepage     = "https://github.com/apache/cordova-ios"  
  s.license      = { :type => "Apache License, Version 2.0", :text => <<-LICENSE
    "type": "Apache License, Version 2.0",
    "text": "      Licensed under the Apache License, Version 2.0 (the \"License\");\n      you may not use this file except in compliance with the License.\n      You may obtain a copy of the License at\n      \n      http://www.apache.org/licenses/LICENSE-2.0\n      \n      Unless required by applicable law or agreed to in writing, software\n      distributed under the License is distributed on an \"AS IS\" BASIS,\n      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n      See the License for the specific language governing permissions and\n      limitations under the License.\n"
    LICENSE
  }
  
  s.author             = { "The Adobe PhoneGap Team" => "" }
  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/apache/cordova-ios.git", :tag => "4.4.0" }
  s.source_files  = "CordovaLib/Classes/Public/*.{h,m}","CordovaLib/Classes/Private/*.{h,m}","CordovaLib/Classes/Private/Plugins/*/*.{h,m}","CordovaLib/Classes/Private/Plugins/CDVGestureHandler/*.{h,m}","CordovaLib/Classes/Private/Plugins/CDVLocalStorage/*.{h,m}",
  "CordovaLib/Classes/Private/Plugins/CDVUIWebViewEngine/*.{h,m}","CordovaLib/Classes/Private/Plugins/CDVHandleOpenURL/*.{h,m}"
  s.preserve_paths = "CordovaLib/cordova.js","CordovaLib/VERSION"
  s.requires_arc = true
  s.frameworks = "AssetsLibrary","MobileCoreServices", "AVFoundation", "CoreLocation"
  
end
