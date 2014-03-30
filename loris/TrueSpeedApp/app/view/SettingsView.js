Ext.define('TrueSpeed.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',
    
    requires: [
    'Ext.field.Select',
    'Ext.Button'
  ],
    
    config: {
        title: 'Settings',
        iconCls: 'settings',
        
        items: [
            {
                name: 'mu',
                xtype: 'selectfield',
                label: 'Measurement Unit',
                labelWidth: '50%',
                options: [
                    {
                        text: 'km/h',
                        value: 'kmh'
                    },
                    {
                         text: 'miles/h',
                         value: 'mh'
                    }],
            },
            {
                xtype: 'button',
                text: 'Apply',
                ui: 'confirm',
                action: 'refresh'
            }
        ]        
    }
});
