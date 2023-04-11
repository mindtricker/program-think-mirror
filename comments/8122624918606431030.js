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