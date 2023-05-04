import { prisma } from "../../../../../lib/prisma";

export async function DELETE(request: Request) {
  const url = new URL(request.url);

  const id = url.searchParams.get("id");

  const deleteCollection = await prisma.collection.delete({
    where: { id: Number(id) },
  });
}
