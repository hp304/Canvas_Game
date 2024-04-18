import Hitbox from './hitbox.js';

class Crate extends Hitbox {
    constructor(image_srcs) {
        super(550, 200, 100, 200);
        this.image = new Image();
        this.image.src = image_srcs[0];
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y + 40, this.width, this.height);
    }
}
export default Crate;