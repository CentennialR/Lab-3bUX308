import { calculatePrismVolume } from "../calculatePrismVolume.js";

describe("Equilateral Triangle Prism Volume", function () {
    it("calculates the volume for side 2 and height 5", function () {
        let volume = calculatePrismVolume(2, 5);
        expect(volume).toBeCloseTo(8.66, 2);
    });

    it("calculates the volume for side 3 and height 10", function () {
        let volume = calculatePrismVolume(3, 10);
        expect(volume).toBeCloseTo(38.97, 2);
    });
});