import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allAdminRooms, newRoom } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConfig";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminRooms);
router.use(isAuthenticatedUser, authorizeRoles("admin")).post(newRoom);

export async function GET(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}

export async function POST(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}
