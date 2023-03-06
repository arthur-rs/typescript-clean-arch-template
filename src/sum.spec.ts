import { sum } from "@/sum"

describe("(UNIT) hello text", () => {
    
	it("should be able compare a sum between two values", () => {
		expect(sum(1, 1)).toBe(2)
	})

})