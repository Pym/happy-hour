var remainingMinutes = function(d) {
  return 18 * 60 - (d.getMinutes() + d.getHours() * 60 + d.getSeconds() / 60);
}

var getBadgeText = function(d) {
  var remainingHours = Math.floor(18 - d.getHours() + d.getMinutes() / 60);

  if (remainingHours < 1) {
    return 'M-' + remainingMinutes(d);
  }

  return 'H-' + remainingHours;
}

document.addEventListener('DOMContentLoaded', function () {
  window.setInterval(function () {
    var d = new Date();

    chrome.browserAction.setBadgeText({text: getBadgeText(d)});

    var bar = document.getElementById('bar');
    bar.innerHTML = '';

    for (var i = Math.ceil(remainingMinutes(d)); i--;) {
      var b = document.createElement('span')
      b.style.backgroundImage = "url('" + chrome.extension.getURL('icon.png') + "')";
      b.style.height = b.style.width = b.style.backgroundSize = '16px';
      b.style.display = 'inline-block';
      bar.appendChild(b);
    }
  }, 1000);
});
