import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allRooms } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";
import { NextResponse } from "next/server";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);

export async function GET(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
