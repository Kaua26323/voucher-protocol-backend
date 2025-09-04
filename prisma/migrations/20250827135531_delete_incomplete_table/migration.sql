/*
  Warnings:

  - You are about to drop the column `complete` on the `vouchers` table. All the data in the column will be lost.
  - You are about to drop the column `incomplete` on the `vouchers` table. All the data in the column will be lost.
  - Added the required column `isComplete` to the `vouchers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vouchers" DROP COLUMN "complete",
DROP COLUMN "incomplete",
ADD COLUMN     "isComplete" BOOLEAN NOT NULL;
