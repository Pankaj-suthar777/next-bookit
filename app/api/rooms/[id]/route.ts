import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getRoomDetails } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";

interface RequestContext {
  params: {
    id: string;
  };
}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getRoomDetails);

export async function GET(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
