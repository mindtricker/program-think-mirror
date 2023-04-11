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