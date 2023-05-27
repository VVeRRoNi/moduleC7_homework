import { reverseString } from "../reverseString.js";

describe("Тест для функции, которая принимает строку и возвращает перевёрнутую строку", () => {
    it("Тесты", () => expect(reverseString("abc")).toBe("cba"));
});