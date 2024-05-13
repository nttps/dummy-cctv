import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const stations = [
    {
        name: "สะพานปทุมธานี 1",
        location:
            "ถนน รังสิต-ปทุมธานี ตำบล บางปรอก อำเภอ เมืองปทุมธานี จังหวัด ปทุมธานี 12000",
        latitude: 14.026473979411982,
        longitude: 100.53880218352005,
        status: true,
    },
    {
        name: "สะพานพระราม 7",
        location:
            "ถนน วงศ์สว่าง แขวงวงศ์สว่าง เขต บางซื่อ จังหวัด กรุงเทพมหานคร 10800",
        latitude: 13.814394156403473,
        longitude: 100.51414694640218,
        status: true,
    },
    {
        name: "สะพานกาญจนาภิเษก",
        location: "อำเภอ พระประแดง จังหวัด สมุทรปราการ 10130",
        latitude: 13.633130188993283,
        longitude: 100.53822982182666,
        status: true,
    },
    {
        name: "สะพานสมเด็จพระเจ้าตากสินมหาราช",
        location:
            "ถนน กรุงธนบุรี แขวง คลองต้นไทร เขต คลองสาน จังหวัด กรุงเทพมหานคร 10600",
        latitude: 13.71927716076404,
        longitude: 100.51192613117395,
        status: true,
    },
    {
        name: "สะพานคลองตัน",
        location:
            "ถนน สุขุมวิท 71 แขวง คลองตันเหนือ เขต วัฒนา จังหวัด กรุงเทพมหานคร 10110",
        latitude: 13.73817795231806,
        longitude: 100.59857500749013,
        status: true,
    },
];

async function main() {

    for (const [i, station] of stations.entries()) {
        const p = await prisma.cctvStation.upsert({
            where: {
                code: i,
            },
            update: {},
            create: {
                code: i,
                ...station,
                updateBy: 'admin'
            },
        });

        console.log(p);
    }

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
