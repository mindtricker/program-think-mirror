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