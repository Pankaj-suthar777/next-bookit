import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { canReview } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser).get(canReview);

export async function GET(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
