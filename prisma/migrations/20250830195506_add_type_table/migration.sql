/*
  Warnings:

  - Added the required column `Type` to the `vouchers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vouchers" ADD COLUMN     "Type" TEXT NOT NULL;
