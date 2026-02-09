(function () {
  'use strict';

  // ===== 3D Tilt Profile Photo =====
  var img = document.getElementById('profile-img');
  if (img) {
    img.addEventListener('mousemove', function (e) {
      var rect = img.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform =
        'perspective(500px) rotateY(' + x * 24 + 'deg) rotateX(' + -y * 24 + 'deg)';
    });
    img.addEventListener('mouseleave', function () {
      img.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg)';
    });
  }

  // ===== Konami Code Easter Egg =====
  var konamiSeq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var konamiPos = 0;

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === konamiSeq[konamiPos]) {
      konamiPos++;
      if (konamiPos === konamiSeq.length) {
        konamiPos = 0;
        launchRockets();
      }
    } else {
      konamiPos = 0;
    }
  });

  function launchRockets() {
    var emojis = ['🚀', '⭐', '🌟', '✨', '🚀', '💫'];
    for (var i = 0; i < 30; i++) {
      (function (delay) {
        setTimeout(function () {
          var el = document.createElement('div');
          el.className = 'konami-rocket';
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.left = Math.random() * 100 + 'vw';
          el.style.animationDuration = 1.5 + Math.random() * 1.5 + 's';
          document.body.appendChild(el);
          el.addEventListener('animationend', function () {
            el.remove();
          });
        }, delay * 80);
      })(i);
    }
  }

  // ===== Interactive Constellation =====
  var canvas = document.createElement('canvas');
  canvas.id = 'constellation';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  var stars = [];
  var mouse = { x: -9999, y: -9999 };
  var STAR_COUNT = 80;
  var CONNECT_DIST = 150;
  var MOUSE_RANGE = 200;

  // Catppuccin Frappe hardcoded
  var BLUE = { r: 140, g: 170, b: 238 };
  var LAVENDER = { r: 186, g: 187, b: 241 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
  }

  function initStars() {
    stars = [];
    for (var i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 1 + Math.random() * 1.5,
        baseAlpha: 0.2 + Math.random() * 0.3
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scroll-adjusted mouse position
    var mx = mouse.x;
    var my = mouse.y + window.scrollY;

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var dx = s.x - mx;
      var dy = s.y - my;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var bright = dist < MOUSE_RANGE ? 1 - dist / MOUSE_RANGE : 0;
      var alpha = s.baseAlpha + bright * 0.6;

      // Draw star
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r + bright * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + LAVENDER.r + ',' + LAVENDER.g + ',' + LAVENDER.b + ',' + alpha + ')';
      ctx.fill();

      // Connect nearby stars when mouse is close
      if (dist < MOUSE_RANGE) {
        for (var j = i + 1; j < stars.length; j++) {
          var s2 = stars[j];
          var dx2 = s.x - s2.x;
          var dy2 = s.y - s2.y;
          var d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d2 < CONNECT_DIST) {
            var lineAlpha = (1 - d2 / CONNECT_DIST) * 0.4 * (1 - dist / MOUSE_RANGE);
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = 'rgba(' + BLUE.r + ',' + BLUE.g + ',' + BLUE.b + ',' + lineAlpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', function () {
    resize();
    initStars();
  });

  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  resize();
  initStars();
  draw();
})();
