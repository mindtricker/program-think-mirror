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