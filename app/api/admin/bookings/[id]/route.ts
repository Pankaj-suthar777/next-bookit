import dbConnect from "@/backend/config/dbConfig";
import { deleteBooking } from "@/backend/controllers/bookingController";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteBooking);

export async function DELETE(requset: NextRequest, ctx: RequestContext) {
  return router.run(requset, ctx);
}
