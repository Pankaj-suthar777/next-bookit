import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";

import dbConnect from "@/backend/config/dbConfig";
import { webhookCheckout } from "@/backend/controllers/paymentControllers";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(webhookCheckout);

export async function POST(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  dbConnect();
  return router.run(requset, ctx) as Promise<NextResponse>;
}
