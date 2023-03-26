export interface NullaryUseCase<Input> {
	execute(input: Input): Promise<void>
}