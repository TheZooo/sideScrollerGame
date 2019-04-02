function safePlatform() {
  this.x = w/2;
  this.y = h/2;
  this.show = function () {
    fill(color('green'));
    rect(this.x,this.y,safePlatSize,safePlatSize);
  };
  this.update = function() {
    collision = collideRectCircle(this.x,this.y,safePlatSize,safePlatSize,jumper.x,jumper.y,jumperSize);
    if (collision === true) {
      if (this.x < jumper.x) {
        jumper.x = this.x;
        jumper.travel = 0;
      }
      else {
        jumper.travel = 5;
      }
      if (this.x > jumper.x) {
        jumper.travel = 0;
      }
      else {
        jumper.travel = 5;
      }
      if (this.y < jumper.y) {
        jumper.gravity = 0;
        jumper.velocity = 0;
      }
      else {
        jumper.gravity = 2;
      }
      if (this.y > jumper.y) {
        jumper.velocity = 0;
      }
    }
  };
}