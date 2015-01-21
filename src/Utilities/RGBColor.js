(function () {
    'use strict';

    var RGBColor = function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }; 
    
    RGBColor.prototype.r = function () {
        return this.r;
    };

    RGBColor.prototype.g = function () {
        return this.g;
    };
   
    RGBColor.prototype.b = function () {
        return this.b;
    };

    // returns an RGBColor object that is the sum of 'this' RGBColor
    // and rgb RGBColor class
    RGBColor.prototype.add = function (rgb) { // Argument Type: RGBColor
        // return an object? 
        return var sum = new RGBColor((this.r + rgb.r),
                                      (this.g + rgb.g),
                                      (this.b + rgb.b)); 
    };
   
    RGBColor.prototype.ac = function (a) = {
        return var ac = new RGBColor((a * this.r), (a * this.g), (a * this.b));
    }; 
 
    RGBColor.prototype.ca = function (a) = {
        return var ca = new RGBColor((this.r * a), (this.g * a), (this.b * a));
    };

    RGBColor.prototype.division = function (a) {
        return var div = new RGBColor((this.r / a), (this.g / a), (this.b / a));
    };

    // need to return a reference
    RGBColor.prototype.eq = function () {

    };

    RGBColor.prototype.mult = function (rgb) {
        return var mult = new RGBColor((this.r * rgb.r),
                                       (this.g * rgb.g),
                                       (this.b * rgb.b));
    }; 

    RGBColor.prototype.exp = function (n) {
        return var exp = new RGBColor(Math.pow(this.r, n),
                                      Math.pow(this.g, n),
                                      Math.pow(this.b, n));
    };
 
    // need to return a reference, not sure about this function in general
    // pe = plus equals (+=)
    RBGColor.prototype.pe = function () {

    };

}());
