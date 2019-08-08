'use strict';

const getBaesUrl = function(doc) {
  const baseUrl = doc.querySelectorAll('base')[0] && doc.querySelectorAll('base')[0].href;
  if (baseUrl) {
    return baseUrl;
  }
  const frameElement = doc.defaultView && doc.defaultView.frameElement;
  if (frameElement) {
    return frameElement.src || getBaesUrl(frameElement.ownerDocument);
  }
  return doc.location.href;
};

module.exports = getBaesUrl;
