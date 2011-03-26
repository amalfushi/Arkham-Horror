Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    icon: 'icon.png',
	
    glossOnIcon: false,
    onReady: function() {
	
		Ext.regModel('AncientOne', {
				fields: ['img','name','expansion','combatRating','defenses','worshippers',
						 'activeText', 'power','startOfBattle','attack', 'doomTrack'] 	
			});
			
		var ancientOnes = new Ext.data.Store({
			root: 'ancientOnes',
			model: 'AncientOne',
			proxy: {
				type: 'ajax',
				url: 'data\ancientOnes.json',
				reader: {
					type: 'json',
					record: 'ancientOne'
				}
			},
			listeners: {
				single: true,
				datachanged: function(){
					Ext.getBody().unmask();
					var items = [];
					
					ancientOnes.each(function(rec){
						items.push({
							name: rec.get('name'),
							img: rec.get('img'),
							expansion: rec.get('expansion'),
							combatRating: rec.get('combatRating'),
							defenses: rec.get('defenses'),
							worshippers: rec.get('worshippers'),
							activeText: rec.get('activeText'),
							power: rec.get('power'),
							startOfBattle: rec.get('startOfBattle'),
							attack: rec.get('attack'),
							doomTrack: rec.get('doomTrack'),							
						});
					});
				}
			}    
		});
		ancientOnes.read();

		function getEncounter(location) {
			return "<p>Fuck " + location + ancientOnes + "</p>";
		};
		
		function getDoomTokens(tokenCount) {
			var tokens = [];
			for(x = 0; x < tokenCount; x++)
			{
				tokens.push({html: '<img src="resources/img/arkham/inactiveDoomToken.png" width="40" height="41" onclick="cycleDoomToken(this);"/>'});
			}
			return tokens;
		};		
		
		var mainWindow = new SideBar({
			navigationItems: Locations,
			doomTokens: getDoomTokens(8),
			listeners: {
                navigate : function(ui, item) {					
					this.popup = new Ext.Panel({
						floating: true,
						modal: true,
						centered: true,
						width: 400,
						height: 200,
						styleHtmlContent: true,
						html: getEncounter(item.text),
						dockedItems: [{
							dock: 'top',
							xtype: 'toolbar',
							title: 'Encounter at ' + item.text
						}],
						scroll: 'vertical'
					});					
					this.popup.show('pop');
				}
			}
		});
			
        var panel = new Ext.TabPanel({
			tabBar: { 
				dock: 'bottom',
				ui: 'dark',
				layout: { pack: 'center' }
			}, 
			
			ui: 'dark',
			fullscreen: true,
			animation: { 
				type:'slide', 
				cover:true 
			},
			defaults: { scroll: false }, 
			
            items: [
			{
			iconCls: "team", 
			title: "Arkham",			
			items: [mainWindow]
			},
			{
				title: 'Rules',
				html: "<p>'Cause they're fucking crazy!</p>",
				iconCls: 'bookmarks', 
				cls: 'card card2'
			},
			{
				title: 'Settings',
				html: "<p>Settings?!</p>",
				iconCls: 'settings', 
				cls: 'card card3'
			}]
        });	
	}
});
