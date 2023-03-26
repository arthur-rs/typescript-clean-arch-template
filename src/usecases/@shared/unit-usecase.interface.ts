export interface UnitUseCase<Output> {
	execute(): Promise<Output>
}