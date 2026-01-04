"use client";

import { useEffect, useState } from "react";
import CategoryFormDialog from "./createCategoryForm";
import { GridList } from "../ui/gridList";

interface Category {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export default function CategoryPageClient({ menuId }: { menuId: string }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category/list");
      const data = await res.json();
      setCategories(data?.data || []);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/category/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.status === 204) {
        fetchCategories();
      } else {
        const data = await res.json();
        console.error("Delete failed", data);
      }
    } catch (err) {
      console.error("Failed to delete category", err);
    }
  };

  const handleEdit = (id: string) => {
    const category = categories.find((c) => c.id === id);
    if (category) {
      setEditingCategory(category);
    }
  };

  const handleCloseForm = () => {
    setEditingCategory(null);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <GridList
        list={categories}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* {openForm || !editingCategory ? ( */}
        <CategoryFormDialog
          type={editingCategory ? "update" : "create"}
          data={editingCategory || undefined}
          menuId={menuId}
          created={() => {
            fetchCategories();
            handleCloseForm();
          }}
        />
      {/* ) : null} */}
    </>
  );
}
