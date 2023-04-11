window.g_loadAllComments = function() {
  if (window.isCommentInited) {
    return {
      feed: {}
    }
  }

  var comments = atob('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');
  var inputArray = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) {
    inputArray[i] = comments.charCodeAt(i);
  }
  var outputArray = pako.inflate(inputArray);
  window.isCommentInited = true;
  return JSON.parse(new TextDecoder("utf-8").decode(outputArray));
}