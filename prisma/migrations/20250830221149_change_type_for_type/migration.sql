/*
  Warnings:

  - You are about to drop the column `Type` on the `vouchers` table. All the data in the column will be lost.
  - Added the required column `type` to the `vouchers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vouchers" DROP COLUMN "Type",
ADD COLUMN     "type" TEXT NOT NULL;
