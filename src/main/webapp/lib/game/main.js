ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works! ' + ig.system.width + ' ' + ig.ua.viewport.width, x, y, ig.Font.ALIGN.CENTER );
	}
});

var scale = ig.ua.pixelRatio * 2;
ig.main( '#canvas', MyGame, 60, ig.ua.viewport.width / scale, ig.ua.viewport.height / scale, scale);

});
