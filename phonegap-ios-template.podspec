Pod::Spec.new do |s|

  s.name               = "phonegap-ios-template"
  s.version            = "0.1.9"
  s.summary            = "PhoneGap sample template project for iOS."

  s.description        = <<-DESC "A PhoneGap sample project to get started quickly with an embedded webview in a native iOS project."
                         DESC
  s.license            = { :type => "Apache License, Version 2.0", :file => "LICENSE" }
  s.homepage           = "https://github.com/phonegap/phonegap-webview-ios"
  s.author             = { "The Adobe PhoneGap Team" => "" }
  s.social_media_url   = "http://twitter.com/phonegap"
  s.source             = { :git => "https://github.com/phonegap/phonegap-webview-ios.git", :tag => "0.1.9" }
  s.resources          = "resources/*"

end
