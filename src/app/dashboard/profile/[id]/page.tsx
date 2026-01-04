import UserProfileComponent from "@/components/dashboard/userProfile";
import { getCurrentUser } from "@/lib/auth/aw-auth";
import { redirect  } from 'next/navigation';

export default async function UserProfilePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const currentUser = await getCurrentUser();
  if(!currentUser) {
    redirect("/auth");
  }
  if(id !== currentUser.id) {
    redirect("/auth");
  }
  return <UserProfileComponent user={currentUser} />
}