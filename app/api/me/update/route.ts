import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import { updateProfile } from "@/backend/controllers/authControllers";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.put(updateProfile);

export async function PUT(requset: NextRequest, ctx: RequestContext) {
  dbConnect();
  return router.run(requset, ctx);
}
