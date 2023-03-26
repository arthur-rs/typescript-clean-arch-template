import { ValueObject } from "@/entities/@shared/interfaces/value-object.interface"

export abstract class Identifier<T> implements ValueObject {
    abstract get value(): T;
}