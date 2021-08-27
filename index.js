module.exports = function srjs(string) {
	if (typeof string !== "string")
		throw new TypeError("srJs require a string as an input");
	return string.replace(/\s/g, "");
};
