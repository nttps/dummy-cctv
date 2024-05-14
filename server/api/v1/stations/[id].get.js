// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

import stations from "~/assets/data/stations.json";


export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");

    const station = stations.find(st => st.code === id);

    return station;
});
