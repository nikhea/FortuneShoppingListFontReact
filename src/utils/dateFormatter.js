import moment from 'moment';

export const DateFormatter = {
	Momentdate(value) {
		return moment(value).format('MMMM Do, YYYY');
	},
	momentTime: function(value) {
		// return moment(value).format('h:mm:ss a');
		return moment(value).format('h:ma');
		// return moment(value).format('MMMM Do YYYY, h:mm:ss a');
	}
};
