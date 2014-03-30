Ext.define('TrueSpeed.model.Travel', {
    extend: 'Ext.data.Model',
  
    config: {
        idProperty: 'id',
        identifier: 'uuid',
        
        requires: ['Ext.data.identifier.Uuid'],
        
        fields: [
            { name: 'distance', type: 'int'},
            { name: 'time', type: 'int' }
        ],
      
        validations: [{
            type: 'presence',
            field: 'distance',
            message: "Please provide a distance."
        }, {
            type: 'presence',
            field: 'time',
            message: "Please provide the time."
        }],
        
        proxy: {
            type: 'localstorage',
            id: 'traveldata'
        }
    },
    
    getSpeed: function() {
      return this.get('distance') / this.get('time');
    }
});
