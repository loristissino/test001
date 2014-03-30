Ext.define('TrueSpeed.view.CalculationView', {
    extend: 'Ext.form.Panel',
    xtype: 'calculationview',
    
    requires: [
       'Ext.Button'
    ],
    
    config: {
    title: 'Calculation',
    iconCls: 'settings',
    html: [ '<h3>Way</h3>',
            '<p>text....</p>',
            '<h3>Vehicle</h3>',
            '<p>text....</p>',
            '<h3>Time</h3>',
            '<p>text....</p>',
            '<h3>Summary</h3>',
            '<p>text....</p>',
            '<div>And you?.... <br>Compare</div>',
          ].join(''),
      
     styleHtmlContent: true,
     scrollable: true,

     items: {
        docked: 'top',
        xtype: 'titlebar',
        title: 'Calculation',
        cls: 'title',
        items: [{
            cls: 'back',
            ui: 'back',
            action: 'back',
            align: 'left',
            text: 'back',
          },
          {
            cls: 'settings',
            iconCls: 'settings',
            ui: 'plain',
            action: 'settings',
            align: 'right',
          }]
        },
   
    }
});
