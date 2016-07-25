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
	
	font: new ig.Font( 'media/Helv32.png' ),
	
	init: function() {
		ig.input.bind( ig.KEY.MOUSE1, 'mouse1' );
		this.loadLevel( LevelChocobohouse );
	},
	
	update: function() {
		this.parent();
		var combee = this.getEntitiesByType( EntityCombee )[0];
		if (combee) {
			this.screen.x = combee.pos.x - ig.system.width/2 + 48;
			this.screen.y = combee.pos.y - ig.system.height/2 + 24;
		}
	},
	
	draw: function() {
		this.parent();
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});

ig.main( '#canvas', MyGame, 40, ig.ua.viewport.width, ig.ua.viewport.height);

});
