class SpritesStore {
  constructor() {
    this.bullets = [];
    this.enemies = [];
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

  removeBulletsFromOutside() {
    this.bullets = this.bullets.filter((bullet) => {
      return (
        bullet.position.x < canvas.width &&
        bullet.position.y < canvas.height &&
        bullet.position.x + bullet.size.width > 0 &&
        bullet.position.y + bullet.size.height > 0
      );
    });
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }

  removeDiedEnemy() {
    if (!this.bullets.length) return;

    this.enemies = this.enemies.filter((enemy) => {
      return this.bullets.some((bullet, index) => {
        const detectBulletInX =
          enemy.position.x + enemy.size.width > bullet.position.x &&
          bullet.position.x > enemy.position.x;

        const detectBulletInY =
          enemy.position.y + enemy.size.height > bullet.position.y &&
          bullet.position.y > enemy.position.y;

        // if (detectBulletInX && detectBulletInY) {
        //   this.bullets.splice(index, 1);
        // }

        return !detectBulletInX || !detectBulletInY;
      });
    });
  }
}
