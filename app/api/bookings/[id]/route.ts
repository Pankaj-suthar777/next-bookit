import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { getBookingDetails } from "@/backend/controllers/bookingController";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser).get(getBookingDetails);

export async function GET(requset: NextRequest, ctx: RequestContext) {
  dbConnect();
  return router.run(requset, ctx);
}
