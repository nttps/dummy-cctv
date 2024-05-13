import { PrismaClient } from "@prisma/client";
import { pagination } from "~/utils/crud";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const params = {
    };

    const include = {
    };
    return await pagination(prisma.cctvStation, event, params, include);
});
