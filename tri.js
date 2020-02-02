function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(550,10);
        ctx.lineTo(510,70);
        ctx.lineTo(590,70);
        ctx.lineTo(550,10);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(630,10);
        ctx.lineTo(593,70);
        ctx.lineTo(593,70);
        ctx.lineTo(555,10);
        ctx.lineTo(630,10);
        ctx.fillStyle = "orange";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(635,10);
        ctx.lineTo(675,70);
        ctx.lineTo(595,70);
        ctx.lineTo(635,10);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(710,10);
        ctx.lineTo(677,70);
        ctx.lineTo(677,70);
        ctx.lineTo(640,10);
        ctx.lineTo(710,10);
        ctx.fillStyle = "orange";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(715,10);
        ctx.lineTo(760,70);
        ctx.lineTo(680,70);
        ctx.lineTo(715,10);
        ctx.fillStyle = "green";
        ctx.fill();
        }
      }