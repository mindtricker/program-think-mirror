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