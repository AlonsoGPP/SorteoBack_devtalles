export abstract class BaseDatasource<T> {
    abstract create(entity: Partial<T>): Promise<T>;

    abstract getById(id: string): Promise<T | null>;
    abstract getOne(field: { [key: string]: any }): Promise<T | null>;

    abstract update(id: string, updatedEntity: Partial<T>): Promise<T | null>;

    abstract delete(id: string): Promise<boolean>;

    abstract getAll(): Promise<T[]>;
}