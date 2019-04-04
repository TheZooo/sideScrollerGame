function barrier() {
        this.travel = 5;
        
        this.show = function () {
          fill(color('yellow'));
          for (var i = 0; i < barX.length; i++) {
            this.x = barX[i];
            this.y = barY[i];
            this.width = barW[i];
            this.height = barH[i];
            rect(barX[i],barY[i],barW[i],barH[i]);
          }
        };
        
        this.update = function () {
          for (var i = 0; i < barX.length; i++) {
            if (barX[i] <= 0) {
              barX.shift();
              barY.shift();
              barW.shift();
              barH.shift();
            }
            barX[i] -= this.travel;
            }
        };
        
        this.addB = function () {
          bx = w + 10;
          by = Math.floor(Math.random() * h);
          bw= Math.floor(Math.random() * 50) + 20;
          bh = Math.floor(Math.random() * 400) + 50;
          barX.push(bx);
          barY.push(by);
          barW.push(bw);
          barH.push(bh);
        };
      }
