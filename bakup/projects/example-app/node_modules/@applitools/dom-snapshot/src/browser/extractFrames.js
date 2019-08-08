'use strict';
const flat = require('./flat');
const isInlineDocument = require('./isInlineFrame');

function extractFrames(documents = [document]) {
  const iframes = flat(
    documents.map(d => Array.from(d.querySelectorAll('iframe[src]:not([src=""])'))),
  );
  return iframes
    .filter(f => isAccessibleFrame(f) && !isInlineDocument(f))
    .map(f => f.contentDocument);
}

function isAccessibleFrame(frame) {
  try {
    const doc = frame.contentDocument;
    return !!(doc && doc.defaultView && doc.defaultView.frameElement);
  } catch (err) {
    // for CORS frames
  }
}

module.exports = extractFrames;
