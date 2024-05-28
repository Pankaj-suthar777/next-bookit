import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";

import dbConnect from "@/backend/config/dbConfig";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import { getSalesStats } from "@/backend/controllers/bookingController";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(getSalesStats);

export async function GET(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  return router.run(requset, ctx) as Promise<NextResponse>;
}
