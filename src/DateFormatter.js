module.exports = {
	encodeUSDate: encodeUSDate
};

function encodeUSDate(date) {
	var d = new Date(date);

	var fullYear = d.getFullYear();
	var month = String(d.getMonth() + 1);
	var day = String(d.getDate());

	if( month.length == 1)
		month = "0" + month;

	if( day.length == 1)
		day = "0" + day;

	if( /[a-zA-Z]+ \d+, \d{4}/.exec(date) ) 
		return fullYear
			+ "-"
			+ month
			+ "-"
			+ day;

	if( /[a-zA-Z]+ \d{4}/.exec(date) ) 
		return fullYear
			+ "-"
			+ month;

	if( /\d{4}/.exec(date) ) {
		return date;
	}
}

