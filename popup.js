var beersCount = 0;

var updateBar = function (minutes) {
    var bar = document.getElementById('bar');
    bar.innerHTML = '';

    for (var i = minutes; i--;) {
      var b = document.createElement('span')
      b.style.backgroundImage = "url('" + chrome.extension.getURL('icon.png') + "')";
      b.style.height = b.style.width = b.style.backgroundSize = '16px';
      b.style.display = 'inline-block';
      bar.appendChild(b);
    }
};

document.addEventListener('DOMContentLoaded', function () {
  var d = new Date();
  beersCount = Math.floor(18 * 60 - (d.getMinutes() + d.getHours() * 60 + d.getSeconds() / 60));
  updateBar(beersCount);
});

chrome.runtime.onMessage.addListener(function(minutes) {
  updateBar(minutes);
});
