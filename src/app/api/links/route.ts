import { NextResponse, connection } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 현재 클릭 수를 한 번에 돌려줍니다. 예: { "github": 42, "blog": 0 }
export async function GET() {
  // DB 설정이 없을 때 빌드 시점 응답(503)이 정적으로 굳지 않도록 항상 요청 시점에 실행합니다.
  await connection();

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json(
      { error: "MONGODB_URI is not configured" },
      { status: 503 },
    );
  }

  const ids = profile.links.map((link) => link.id);
  const docs = await clicks.find({ _id: { $in: ids } }).toArray();

  // 아직 한 번도 클릭되지 않은 링크는 문서가 없으므로 0으로 채웁니다.
  const counts = Object.fromEntries(ids.map((id) => [id, 0]));
  for (const doc of docs) counts[doc._id] = doc.count;

  return NextResponse.json(counts);
}
