import { kelvinToFahrenheit } from "../kelvinToFahrenheit.js";

describe("Kelvin to Fahrenheit Conversion", function () {
    it("converts 273.15K to 32°F", function () {
        let fahrenheit = kelvinToFahrenheit(273.15);
        expect(fahrenheit).toBe(32);
    });

    it("converts 300K to 80.33°F", function () {
        let fahrenheit = kelvinToFahrenheit(300);
        expect(fahrenheit).toBeCloseTo(80.33, 2);
    });
});