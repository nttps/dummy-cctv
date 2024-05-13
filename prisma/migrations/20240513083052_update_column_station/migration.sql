-- CreateEnum
CREATE TYPE "WaterLevel" AS ENUM ('HIGH', 'MEDUIM', 'LOW');

-- CreateTable
CREATE TABLE "cctv_stations" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "createBy" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "cctv_stations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cctv_histories" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "waterLevel" "WaterLevel" NOT NULL DEFAULT 'LOW',
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "cctv_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "war_rooms" (
    "id" SERIAL NOT NULL,
    "createBy" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "war_rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "war_room_layouts" (
    "id" SERIAL NOT NULL,
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "war_room_layouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cctv_stations_code_key" ON "cctv_stations"("code");

-- AddForeignKey
ALTER TABLE "cctv_histories" ADD CONSTRAINT "cctv_histories_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "cctv_stations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "war_room_layouts" ADD CONSTRAINT "war_room_layouts_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "cctv_stations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
