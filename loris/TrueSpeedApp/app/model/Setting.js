Ext.define('TrueSpeed.model.Setting', {
    extend: 'Ext.data.Model',
    
    config: {
		
		idProperty: 'id',
		identifier: 'uuid',
		
        fields: [
            { name: 'mu', type: 'auto' }

        ],
        
        proxy: {
            type: 'localstorage',
            id: 'musettings'
        }
    }
});
