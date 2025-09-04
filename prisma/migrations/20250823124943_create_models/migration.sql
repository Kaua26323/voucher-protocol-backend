-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."vouchers" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "incomplete" BOOLEAN NOT NULL,
    "description" TEXT,
    "lastUser" TEXT NOT NULL,

    CONSTRAINT "vouchers_pkey" PRIMARY KEY ("id")
);
