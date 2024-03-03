-- CreateTable
CREATE TABLE "Tenant" (
    "id" SERIAL NOT NULL,
    "subdomain" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_subdomain_key" ON "Tenant"("subdomain");
