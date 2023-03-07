import { Dto } from "@/@shared/interfaces/dto.interface"

export interface UnitUseCase<Output extends Dto> {
	execute(): Promise<Output>
}