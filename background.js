var remainingMinutes = function(d) {
  return Math.floor(18 * 60 - (d.getMinutes() + d.getHours() * 60 + d.getSeconds() / 60));
}

var getBadgeText = function(d) {
  var minutes = remainingMinutes(d);

  if (minutes < 60) {
    return 'M-' + minutes;
  }

  return 'H-' + Math.floor(18 - d.getHours() + d.getMinutes() / 60);
}

window.setInterval(function () {
  var d = new Date();
  var newBadgeText = getBadgeText(d);

  chrome.browserAction.getBadgeText({}, function(result) {
    if (result != newBadgeText) {
      chrome.browserAction.setBadgeText({text: newBadgeText});
      chrome.runtime.sendMessage(null, remainingMinutes(d));
    }
  });
}, 1000);
