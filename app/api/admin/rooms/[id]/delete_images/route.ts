import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { deleteRoomImage } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";

interface RequestContext {
  params: {
    id: string;
  };
}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).put(deleteRoomImage);

export async function PUT(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}
