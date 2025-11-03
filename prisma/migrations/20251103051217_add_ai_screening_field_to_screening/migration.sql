-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "aiScreening" TEXT,
ALTER COLUMN "severity" DROP NOT NULL;
