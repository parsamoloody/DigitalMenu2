import { MenuBasicProps, MenuResponse } from "@/packages/package-core/types";
import axios from "axios"


// fetch menu

export const fetchMenus = async(): Promise<MenuResponse[]> => {
const res = await axios.get('/api/menu/list')

  if (!res.data?.success) {
    throw new Error(res.data?.error ?? "Failed to fetch menus");
  }
  return res.data.data?.map((item: { props: MenuBasicProps }) => item.props) || [];
}


// find menu

export const findMenuById = async(id: string): Promise<MenuResponse> => {;
  const res = await axios.get(`/api/menu/find-by-id/${id}`)
 
  if (!res.data?.success) {
    throw new Error(res.data?.error ?? `Failed to fetch menu with id ${id}`);
  }
  
  return res.data.data?.props ?? []
}