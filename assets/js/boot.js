/* Classic script: works from file:// and HTTPS without module/CORS requirements. */
(function () {
  'use strict';
  var ready = false;
  var timer;
  function failed() {
    if (ready) return;
    function show() {
      var status = document.getElementById('bootStatus');
      if (status) status.hidden = true;
      var error = document.getElementById('homeError');
      if (!error) return;
      error.textContent = 'ما اكتمل تحميل الموقع. تأكد أنك فكّيت ضغط المجلد كامل، ثم أعد فتح الصفحة.';
      error.hidden = false;
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show, { once: true });
    else show();
  }
  globalThis.ZangaBoot = {
    ready: function () {
      ready = true;
      clearTimeout(timer);
      document.documentElement.dataset.ready = 'true';
      var status = document.getElementById('bootStatus');
      if (status) status.hidden = true;
    },
    failed: failed
  };
  addEventListener('error', function (event) {
    if (!ready && (event.target?.tagName === 'SCRIPT' || event.filename?.includes('/runtime/app.js'))) failed();
  }, true);
  timer = setTimeout(failed, 10000);
})();
