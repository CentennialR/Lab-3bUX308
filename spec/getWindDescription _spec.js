import { getWindDescription } from "../getWindDescription.js";

describe("Beaufort Wind Scale", function () {
    it("classifies 3 m/s as 'Light breeze'", function () {
        let description = getWindDescription(3);
        expect(description).toBe("Light breeze");
    });

    it("classifies 30 m/s as 'Storm'", function () {
        let description = getWindDescription(30);
        expect(description).toBe("Storm");
    });
});