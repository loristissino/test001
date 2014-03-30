Ext.define('TrueSpeed.view.StartView', {
    extend: 'Ext.form.Panel',
    xtype: 'startview',
    
    requires: [
    'Ext.Button'
  ],
    
    config: {
    title: 'Start',
    iconCls: 'home',
          html: '<div id="loris">[image of car]<br><div id="speedinfo"></div></div>',
                  
          styleHtmlContent: true,
          scrollable: true,

          items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'TrueSpeed'
                },
        
          listeners: {
            
            initialize: function () { 
                           
                this.onAfter("painted", function () {
                console.log('I am being painted' + new Date());

//                TrueSpeed.currentmodel = TrueSpeed.utils.Functions.loadData();

                if (TrueSpeed.app.myglobals.currentmodel){
                  console.log("There is a model!");
                  console.log("Distance: " + TrueSpeed.app.myglobals.currentmodel.get('distance'));
                  var tpl = new Ext.XTemplate(
                    'The vehicle going {distance} kms for {time} hours has a speed of {speed} km/h.'
                  );
                  var traveldata = {
                    distance: TrueSpeed.app.myglobals.currentmodel.get('distance'),
                    time: TrueSpeed.app.myglobals.currentmodel.get('time'),
                    speed: TrueSpeed.app.myglobals.currentmodel.getSpeed()
                  }; 
                  console.log(traveldata);
                  var html = tpl.apply(traveldata);
                  console.log(html);
                  
                  Ext.get('speedinfo').setHtml(html);
                  
                  console.log("Should have applied the html");
                  console.log(Ext.get('speedinfo').getHtml());
                  console.log(Ext.get('loris').getHtml());
                }
                else
                {
                  Ext.get('speedinfo').setHtml('No info yet.');
                }
              });
            }  

          }
    
    }
});
