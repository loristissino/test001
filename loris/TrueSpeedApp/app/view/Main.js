Ext.define('TrueSpeed.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'TrueSpeed.view.StartView',
        'TrueSpeed.view.CalculationView',
        'TrueSpeed.view.TravelView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
          {
            xtype: 'startview'
          },
          {
            xtype: 'calculationview'
          },
          {
            xtype: 'travelview'
          }
        ]
    }
});
