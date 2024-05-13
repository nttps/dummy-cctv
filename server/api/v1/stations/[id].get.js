import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");

    const station = await prisma.cctvStation.findFirstOrThrow({
        where: {
            code: parseInt(id),
        },
    });

    return station;
});
