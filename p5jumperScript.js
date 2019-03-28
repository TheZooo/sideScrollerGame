function jumper() {
        this.x = 100;
        this.y = 0;
        this.gravity = 2;
        this.lift = -10;
        this.travel = 5;
        this.velocity = 0;
        this.show = function() {
          fill(color('red'));
          ellipse(this.x,this.y,jumperSize);
        };
        this.up = function() {
          this.velocity += this.lift;
        };
        this.down = function() {
          this.velocity -= (this.lift + 5);
        };
        this.hori = function() {
          if (keyIsDown(37)) {
            this.x -= this.travel;
          }
          if (keyIsDown(39)) {
            this.x += this.travel;
          }
        };
        this.update = function() {
          if (this.velocity < this.gravity) {
            this.velocity++;
          }
          if (this.y > h - jumperSize) {
            this.y = h - jumperSize;
            this.velocity = -8;
          }
          if (this.y < jumperSize) {
            this.y = jumperSize;
            this.velocity = 0;
          }
          if (this.x < jumperSize) {
            this.x = jumperSize;
          }
          if (this.x > w - jumperSize) {
            this.x = w - jumperSize;
          }
          this.y += this.velocity;
        };
      }