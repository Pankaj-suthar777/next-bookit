import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import { forgotPassword } from "@/backend/controllers/authControllers";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(forgotPassword);

export async function POST(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
