import { DomainError } from "@/entities/@shared/errors/domain.error"

describe("Domain error", () => {

	it("should be able to create a domain error", () => {
		const error = DomainError.from("field", "error")
		expect(error).toBeInstanceOf(DomainError)
		expect(error).toBeInstanceOf(Error)
		expect(error.field).toBe("field")
		expect(error.message).toBe("error")
	})

})