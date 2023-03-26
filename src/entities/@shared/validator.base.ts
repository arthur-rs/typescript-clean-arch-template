import { ValidationHandler } from "@/entities/@shared/interfaces/validation-handler.interface"

export abstract class Validator {

	private readonly _handler: ValidationHandler

	constructor(handler: ValidationHandler) {
		this._handler = handler
	}

	public get handler(): ValidationHandler {
		return this._handler
	}

	public abstract validate(): void
}