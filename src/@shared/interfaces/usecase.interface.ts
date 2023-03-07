import { Dto } from "@/@shared/interfaces/dto.interface"

export interface UnitUseCase<Input extends Dto, Output extends Dto> {
	execute(input: Input): Promise<Output>
}