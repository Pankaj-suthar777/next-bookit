import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import { resetPassword } from "@/backend/controllers/authControllers";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.put(resetPassword);

export async function PUT(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
