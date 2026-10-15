import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: RouteContext<"/api/links/[id]/click">
) {
  const { id } = await params;

  if (!profile.links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "Unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json(
      { error: "MONGODB_URI is not configured" },
      { status: 503 }
    );
  }

  const result = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
