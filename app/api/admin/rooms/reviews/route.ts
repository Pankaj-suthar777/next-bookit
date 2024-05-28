import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import {
  deleteRoomReview,
  getRoomDetails,
  getRoomReviews,
} from "@/backend/controllers/roomController";
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

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(getRoomReviews);
router
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .delete(deleteRoomReview);

export async function GET(requset: NextRequest, ctx: RequestContext) {
  dbConnect();
  return router.run(requset, ctx);
}

export async function DELETE(requset: NextRequest, ctx: RequestContext) {
  dbConnect();
  return router.run(requset, ctx);
}
