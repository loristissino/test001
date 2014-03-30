Ext.define('TrueSpeed.store.Travel', {
    extend: 'Ext.data.Store',
    requires: ['TrueSpeed.model.Travel'],
        config: {
            model: 'TrueSpeed.model.Travel',
            autoLoad: true,
            autoSync: true,
    }
});
