import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import { uploadAvatar } from "@/backend/controllers/authControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser).put(uploadAvatar);

export async function PUT(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
