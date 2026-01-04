'use client'
import { useQuery } from "@tanstack/react-query"
import { fetchMenus } from "../service/menuService"
import { MenuResponse } from "@/packages/package-core/types"

const useListMenus = () => {
 const {data, isLoading: loadingListMenu, isError: errorListMenu} = useQuery<MenuResponse[]>({
    queryKey:['menus'],
    queryFn: fetchMenus
 })
 return {data, loadingListMenu, errorListMenu}
}

export default useListMenus
