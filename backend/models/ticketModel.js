const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId, // Relates this field to the User's object id
			required: true,
			ref: 'User', // Which collection to connect to
		},
		product: {
			type: String,
			required: [true, 'Please select a product'],
			enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
		},
		description: {
			type: String,
			required: [true, 'Please enter a description of the issue'],
		},
		status: {
			type: String,
			required: true,
			enum: ['new', 'open', 'closed'],
			default: 'new',
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Ticket', ticketSchema);
