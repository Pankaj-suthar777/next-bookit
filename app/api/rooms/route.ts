import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allRooms } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";
interface RequestContext {
  params: {
    id: string;
  };
}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);

export async function GET(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}
