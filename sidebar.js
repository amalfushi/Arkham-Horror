SideBar = Ext.extend(Ext.Panel, {
    fullscreen: true,
    ui: 'dark',
    initComponent : function() {
     
        this.navigationPanel = new Ext.NestedList({
            items: this.navigationItems || [],
            dock: 'right',
            width: 200,
			listeners: {
                listchange: this.onListChange,
                scope: this
            }
        });
		
		this.doomTrack = new Ext.Container({
			items: this.doomTokens || [],
			dock: 'left', 
			width: 54,	
			draggable: false,			
			centered: true
		});
		
		this.ancientOnePanel = new Ext.Panel({
			items: this.ancientOne,
			dock: 'top',
			width: 200,
			centered: true 
		});
			        
        this.dockedItems = [];
                
        this.dockedItems.push(this.navigationPanel);
		this.dockedItems.push(this.doomTrack); 
		this.dockedItems.push(this.ancientOnePanel); 
                
        this.addEvents('navigate');
        
        SideBar.superclass.initComponent.call(this);
    },
    
    onListChange : function(list, item) {
        this.fireEvent('navigate', this, item, list);
    },
});
