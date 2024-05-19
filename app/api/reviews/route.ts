import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { createRoomReview } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser).put(createRoomReview);

export async function PUT(requset: NextRequest, ctx: RequestContext) {
  dbConnect();
  return router.run(requset, ctx);
}
