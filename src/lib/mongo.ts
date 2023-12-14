import { MongoClient, Db, ServerApiVersion } from 'mongodb';

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_INITDB_DATABASE } = process.env;
class MongoDbHelper {
  private client: MongoClient;
  private uri: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongo:27017/?authMechanism=DEFAULT`;
  private dbName: string = MONGO_INITDB_DATABASE || 'test';
  private db: Promise<Db>;

  constructor() {
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    this.db = this.connect();
  }

  private async connect(): Promise<Db> {
    await this.client.connect();
    return this.client.db(this.dbName);
  }

  private getDb(): Promise<Db> {
    return this.db;
  }

  public async getCollection(name: string) {
    const db = await this.getDb();
    return db.collection(name);
  }
}

const db = new MongoDbHelper();

export default db;
