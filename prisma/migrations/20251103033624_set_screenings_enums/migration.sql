/*
  Warnings:

  - Changed the type of `severity` on the `Screening` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Screening` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ScreeningStatus" AS ENUM ('PENDING', 'REVIEWED', 'APPROVED', 'REJECTED', 'FLAGGED');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "sex" "Sex";

-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "severity",
ADD COLUMN     "severity" "Severity" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ScreeningStatus" NOT NULL;
