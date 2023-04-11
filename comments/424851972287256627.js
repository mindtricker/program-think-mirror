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