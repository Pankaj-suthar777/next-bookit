import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { newRoom } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(newRoom);

export async function POST(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}
