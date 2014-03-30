Ext.define('TrueSpeed.view.DataView', {
    extend: 'Ext.Container',
    xtype: 'dataview',
    requires: [
        'Ext.carousel.Carousel'
    ],
    
    config: {
        layout: {
      type: 'vbox',
      align: 'stretch'
      },
    defaults: {
        flex: 1
      },

        items: [
          {
              docked: 'top',
              scrollable: true,
            html: 'ABCDE',
            csl: 'card',
          },
          {
              docked: 'top',
              scrollable: true,
            html: 'FGHIJKL',
            csl: 'card',
          }
         ]
    }
});
