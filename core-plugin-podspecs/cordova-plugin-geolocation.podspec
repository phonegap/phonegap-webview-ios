Pod::Spec.new do |s|

  s.name         = "cordova-plugin-geolocation"
  s.version      = "0.3.10"  
  s.summary      = "Cordova Geolocation Plugin"
  
  s.description  = <<-DESC "This plugin provides information about the device's location, such as latitude and longitude. "
  DESC
  
  s.homepage     = "https://github.com/apache/cordova-plugin-geolocation"
  
  s.license      = { :type => "Apache License, Version 2.0", :text => <<-LICENSE
    "type": "Apache License, Version 2.0",
    "text": "      Licensed under the Apache License, Version 2.0 (the \"License\");\n      you may not use this file except in compliance with the License.\n      You may obtain a copy of the License at\n      \n      http://www.apache.org/licenses/LICENSE-2.0\n      \n      Unless required by applicable law or agreed to in writing, software\n      distributed under the License is distributed on an \"AS IS\" BASIS,\n      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n      See the License for the specific language governing permissions and\n      limitations under the License.\n"
    LICENSE
  }


  s.author             = { "The Adobe PhoneGap Team" => "" }
  s.platform     = :ios, "6.0"
  s.source       = { :git => "https://github.com/apache/cordova-plugin-geolocation.git", :tag => "0.3.10" }
  s.source_files  = "src/ios/*.{h,m}"
  s.preserve_paths = "*.md","docs/**/*.md","www/*.js","www/ios/*.js"
  s.requires_arc = true
  s.dependency "Cordova", ">= 3.0.0"
    
end
