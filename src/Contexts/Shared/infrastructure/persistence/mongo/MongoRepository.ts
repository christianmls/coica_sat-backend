import { Collection, MongoClient } from 'mongodb';
import { AggregateRoot } from '../../../domain/AggregateRoot';
import {Nullable} from "../../../domain/Nullable";

export abstract class MongoRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract collectionName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName());
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }

  protected async removeById(id: string): Promise<void> {
    const collection = await this.collection();

    await collection.deleteOne({ _id: id });
  }
  
  protected async findOne<Document>(query: object): Promise<Nullable<Document>> {
    const collection = await this.collection();

    return await collection.findOne<Document>(query);
  }

  protected async findAll<Document>(): Promise<Nullable<Array<Document>>> {
    const collection = await this.collection();

    return await collection.find<Document>({   }).toArray();
  }
}
