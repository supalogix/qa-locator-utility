var DateFormatter = require("../src/DateFormatter");
var expect = require("chai").expect;

describe("DateFormatter", () => {
	it("converts 'January 20, 2016'", () => {
		//
		// Arrange
		//
		let date = "January 20, 2016";

		//
		// Act
		//
		let qaValue = DateFormatter.encodeUSDate(date);

		//
		// Assert
		//
		expect(qaValue).to.equal("2016-01-20");
	});

	it("converts 'January 01, 2016'", () => {
		//
		// Arrange
		//
		let date = "January 01, 2016";

		//
		// Act
		//
		let qaValue = DateFormatter.encodeUSDate(date);

		//
		// Assert
		//
		expect(qaValue).to.equal("2016-01-01");
	});

	it("converts 'January 2016'", () => {
		//
		// Arrange
		//
		let date = "January 2016";

		//
		// Act
		//
		let qaValue = DateFormatter.encodeUSDate(date);

		//
		// Assert
		//
		expect(qaValue).to.equal("2016-01");
	});

	it("converts '2016'", () => {
		//
		// Arrange
		//
		let date = "January 2016";

		//
		// Act
		//
		let qaValue = DateFormatter.encodeUSDate(date);

		//
		// Assert
		//
		expect(qaValue).to.equal("2016-01");
	});
});
