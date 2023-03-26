export interface UnitUseCase<Input, Output> {
	execute(input: Input): Promise<Output>
}