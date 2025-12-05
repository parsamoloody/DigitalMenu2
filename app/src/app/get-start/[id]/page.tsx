import MenuSetupStepper from "@/components/createMenu/getStart";
import { getCurrentUser } from "@/packages/lib/prisma/auth/aw-auth";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return notFound();
  const {id} = await params
  if (id !== currentUser.id) return notFound();

  return <MenuSetupStepper />;
}
