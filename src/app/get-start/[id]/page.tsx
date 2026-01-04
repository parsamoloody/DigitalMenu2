import MenuSetupStepper from "@/components/createMenu/getStart";
import { getCurrentUser } from "@/lib/auth/aw-auth";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return redirect("/auth");
  const {id} = await params
  if (id !== currentUser.id) return redirect("/auth");

  return <MenuSetupStepper />;
}
