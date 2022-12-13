var mongoose = require('mongoose');
var schema = mongoose.Schema;


let vehicleSchema = new schema({
	vehiclename: {
		type: String,
		require: true,
		unique:true,
	},
	vehicleType: {
		type: String,
		require: true,
	},
	status: {
		type: Boolean,
		default: false,
	},
	userid: {
		type: schema.Types.ObjectId,
		ref: 'users'
	},
	price :{
		type: number,
		default: 0
	},
});
module.exports = mongoose.model('vehicle', vehicleSchema);
