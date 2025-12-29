import MenuDetails from '@/components/menu/MenuDetails'


const MenuDetailPage = async({params} : {params: Promise<{id: string}>}) => {
  const {id} = await params
  return (
    <div className="min-[366px]:flex min-[366px]:justify-center min-[366px]:items-center">
      <MenuDetails id={id} />
    </div>
  )
}

export default MenuDetailPage
