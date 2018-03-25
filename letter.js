var Letter = function(char) {
	this.charac = char.toLowerCase();
	this.appear = false;
	this.letterRender = function() {
		if (this.appear) {
			return this.charac;
		} else if (this.charac === " ") {
				this.appear = true;
				return this.charac;
		} else {
				return "_ ";
		}
	};
};

exports.Letter = Letter;