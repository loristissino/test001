Ext.define('TrueSpeed.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
           startView: 'startview',
           TravelView: 'travelview',
 
           btnSaveAndShow: 'travelview button[action=save]',
           // btnBack: 'main button[action=back]',
 
           fieldDistance: 'travelview textfield[name=distance]',
           fieldTime: 'travelview textfield[name=time]'     
        },
        control: {
          btnSaveAndShow: {
              tap: 'onSaveAndShow'
            },
        },
        
        stores: 'TrueSpeed.store.Travel',
    },

    onSaveAndShow: function() {
        console.log('****You tapped onSaveAndShow!');
        Ext.Viewport.setMasked({
        xtype: 'loadmask',
        indicator: true,
        message: 'Save Settings...'
        });
        
        var errorstring = "";
        var store = Ext.getStore('Travel');
        //remove previous settings
        store.removeAll();
        //store.sync();
        
        

        console.log("Previous data removed " + store.getAllCount() + " records there.");

        var model = Ext.create("TrueSpeed.model.Travel", {});
        this.getTravelView().updateRecord(model);
        
        console.log("New data: " + model.get('distance'));
        //console.log(JSON.stringify(this.getTravelView().get("distance")));
        
        var errors = model.validate();

        if (errors.isValid() === false) {
          errors.each(function(errorObj) {
              errorstring += errorObj.getMessage() + "<br />";
          });

        Ext.Msg.alert("Oops", errorstring);

        } else {
          store.add(model.getData());
          //store.sync();
          console.log("data stored, distance is " + model.get("distance") + " speed is " + model.getSpeed());
          //TrueSpeed.app.myglobals.currentmodel = model;
          TrueSpeed.utils.Functions.loadData();
        }

        Ext.Viewport.unmask();
        Ext.Viewport.setActiveItem({xtype:'main'});
        
        console.log("Global object's speed: " +TrueSpeed.app.myglobals.currentmodel.getSpeed());
        
    },
    
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
      TrueSpeed.utils.Functions.loadData();
      //console.log(TrueSpeed.currentmodel.getSpeed());
    }
});
