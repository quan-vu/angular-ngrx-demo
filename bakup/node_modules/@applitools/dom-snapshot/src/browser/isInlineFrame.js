'use strict';

function isInlineFrame(frame) {
  return (
    frame && frame.contentDocument && !/^https?:$/.test(frame.contentDocument.location.protocol)
  );
}

module.exports = isInlineFrame;
