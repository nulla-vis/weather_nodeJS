const Weather = function (data) {
    this.data = data;
    this.errors = [];
}

Weather.prototype.validateUserInput = function() {
    if(this.data == '') {
        this.errors.push('Please Enter the Name of The city');
    }
}

module.exports = Weather;