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

  protected async countDocuments(query: object = {}): Promise<number> {
    return (await this.collection()).countDocuments(query);
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

  protected async findAll<Document>(
    query: {[key: string]: string} = {},
    pagination: Nullable<{ pageNumber: number, nPerPage: number }> = null): Promise<Nullable<Array<Document>>> {
    const collection = await this.collection();

    return pagination ?
      await collection.find<Document>(query)
        .skip(pagination?.pageNumber > 0 ? ( ( pagination.pageNumber - 1 ) * pagination.nPerPage ) : 0)
        .limit(pagination.nPerPage).toArray() :
      await collection.find<Document>(query).toArray();
  }
}
