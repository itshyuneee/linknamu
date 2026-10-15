import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

// 개발 모드의 핫 리로드 때마다 연결이 새로 생기지 않도록 클라이언트를 전역에 캐시합니다.
function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  globalForMongo.mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo.mongoClientPromise;
}

type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = getClient();
  if (!client) return null;
  return (await client).db(dbName).collection<ClickDoc>("clicks");
}
