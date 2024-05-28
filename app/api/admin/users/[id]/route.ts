import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConfig";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import {
  deleteUser,
  getUserDetails,
  updateUser,
} from "@/backend/controllers/authControllers";

interface RequestContext {}
const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUserDetails);
router.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateUser);
router.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteUser);

export async function GET(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  return router.run(requset, ctx) as Promise<NextResponse>;
}

export async function PUT(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  return router.run(requset, ctx) as Promise<NextResponse>;
}

export async function DELETE(
  requset: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  return router.run(requset, ctx) as Promise<NextResponse>;
}
