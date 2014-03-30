Ext.define('TrueSpeed.utils.Functions', {
    singleton: true,
    //singleton methods here
    
    loadData: function() {
		   var me = this;
       var distance;
       var time;
       
		   Ext.Viewport.setMasked({
			   xtype: 'loadmask',
			   indicator: true,
			   message: 'Retrieving info...'
		   });
       
       console.log('Retrieving info...');
/*
       Ext.getStore('Travel').load({
          callback: function(records, operation, success) {

            if (records.length > 0) {
              TrueSpeed.currentmodel = records[0];
              console.log("Data loaded, current speed is " + TrueSpeed.currentmodel.getSpeed());
              //Load details from settings
            }
          }
        }
       );
  */     
       TrueSpeed.app.myglobals.currentmodel = Ext.getStore('Travel').first();
       
       //console.log("After loading: " + TrueSpeed.app.myglobals.currentmodel.get('distance'));
              
       Ext.Viewport.unmask();
       
    }
    
});
