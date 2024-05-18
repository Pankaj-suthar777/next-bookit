import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import { stripeCheckoutSession } from "@/backend/controllers/paymentControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser).get(stripeCheckoutSession);

export async function GET(requset: NextRequest, ctx: RequestContext) {
  dbConnect();
  return router.run(requset, ctx);
}
