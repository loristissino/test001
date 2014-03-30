Ext.define('TrueSpeed.view.TravelView', {
    extend: 'Ext.form.Panel',
    xtype: 'travelview',
    
    config: {
        title: 'Travel',
        iconCls: 'user',
        
        items: [
            {
              docked: 'top',
              xtype: 'titlebar',
              title: 'Travel',
              cls: 'title',
              items: [{
                  cls: 'back',
                  ui: 'back',
                  action: 'back',
                  align: 'left',
                  text: 'back',
                }],
            },

            {
                name: 'distance',
                xtype: 'textfield',
                label: 'Distance (km)'
            },
            {
                name: 'time',
                xtype: 'textfield',
                label: 'Time (hrs)'
            },
            {
                xtype: 'button',
                text: 'Save and Show',
                margin: '10 5',
                ui: 'confirm',
                action: 'save'
            }
        ]        
    }
});
