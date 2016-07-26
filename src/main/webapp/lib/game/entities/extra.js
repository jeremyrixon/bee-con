ig.module(
    'game.entities.extra'
)
.requires(
    'impact.entity'
)
.defines(function() {
	EntityExtra = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/combee_front_sheet.gif', 96, 48 ),
		size:  {x: 96, y: 48},
		offset: {x: 0, y: 0},
		flip: false,
		type: ig.Entity.TYPE.B,
                collides: ig.Entity.COLLIDES.ACTIVE,
		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.addAnim( 'idle',  .05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] );
			this.currentAnim = this.anims.idle;
		},
                update: function() {
			this.parent();
		},
	})
});
