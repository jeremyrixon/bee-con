ig.module(
    'game.entities.combee'
)
.requires(
    'impact.entity'
)
.defines(function() {
	EntityCombee = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/combee_front_sheet.gif', 96, 48 ),
		size:  {x: 96, y: 48},
		offset: {x: 0, y: 0},
		flip: false,
                type: ig.Entity.TYPE.A,
                collides: ig.Entity.COLLIDES.PASSIVE,
		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.addAnim( 'idle',  .05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] );
			this.currentAnim = this.anims.idle;
		},
                update: function() {
			this.vel.x *= 0.9;
			this.vel.y *= 0.9;
			if (ig.input.state("left")) {
				this.vel.x -= 40;
				delete this.dest;
			} 
			if (ig.input.state("right")) {
				this.vel.x += 40;
				delete this.dest;
			}
			if (ig.input.state("up")) {
				this.vel.y -= 40;
				delete this.dest;
			}
			if (ig.input.state("down")) {
				this.vel.y += 40;
				delete this.dest;
			} 
			if (ig.input.state("mouse1")) {
				var x = (ig.input.mouse.x + ig.game.screen.x); //Figures out the x coord of the mouse in the entire world
				var y = (ig.input.mouse.y + ig.game.screen.y); //Figures out the y coord of the mouse in the entire world
				this.dest = { x : x, y : y };
			}
			if (this.dest) {
				var dx = this.dest.x - this.pos.x - this.size.x / 2;
				var dy = this.dest.y - this.pos.y - this.size.y / 2;
				var r = Math.atan2(dy, dx); //Gives angle in radians from the entity's location to the dest location.
				var speed = (dx * dx + dy *dy) / 20;
				this.vel.x = Math.cos(r) * speed;
				this.vel.y = Math.sin(r) * speed;
			}
			this.parent();
		},
	})
});
