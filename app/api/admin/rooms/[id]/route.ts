import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { deleteRoom, updateRoom } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";

interface RequestContext {
  params: {
    id: string;
  };
}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.put(updateRoom);
router.delete(deleteRoom);

export async function PUT(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}

export async function DELETE(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}
