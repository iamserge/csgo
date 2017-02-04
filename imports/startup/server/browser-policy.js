import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll("http://fonts.googleapis.com");
BrowserPolicy.content.allowOriginForAll("http://fonts.gstatic.com");
BrowserPolicy.content.allowOriginForAll("https://steamcdn-a.akamaihd.net/");