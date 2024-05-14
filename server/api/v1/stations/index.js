//import { PrismaClient } from "@prisma/client";
//import { pagination } from "~/utils/crud";
import stations from "~/assets/data/stations.json";

//const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const params = {
    };

    const include = {
    };

    return {
        data: stations,
        total: stations.length,
    };
    //return await pagination(prisma.cctvStation, event, params, include);
});
