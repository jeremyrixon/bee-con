ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.chocobohouse'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
		this.loadLevel( LevelChocobohouse );
	},
	
	update: function() {
		this.parent();
		var combee = this.getEntitiesByType( EntityCombee )[0];
		if (combee) {
			
		}
	},
	
	draw: function() {
		this.parent();
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works! ' + ' ' + scale, x, y, ig.Font.ALIGN.CENTER );
	}
});

var scale = 2; // ig.ua.pixelRatio * 2;

ig.main( '#canvas', MyGame, 40, ig.ua.viewport.width / scale, ig.ua.viewport.height / scale, scale);

});
