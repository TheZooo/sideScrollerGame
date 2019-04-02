function safePlatform() {
  this.x = w/2;
  this.y = h/2;
  this.show = function () {
    fill(color('green'));
    rect(this.x,this.y,safePlatSize,safePlatSize);
  };
}
