import CategoryPageClient from "@/components/category/listPage";
import { getCurrentMenu } from "@/lib/auth/menu-auth.ts";
import { redirect } from 'next/navigation'
export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ menuId?: string }>;
}) {
  const currentMenu = await getCurrentMenu();

  const { menuId } = await searchParams;

  if (!currentMenu || !menuId) redirect("/auth");
  if (menuId !== currentMenu.id) redirect('/auth');

  return (
    <div className="p-5 max-w-[500px] mx-auto">
      <CategoryPageClient menuId={currentMenu.id!} />
    </div>
  );
}
