import { MenuDropdown, MenuItem } from '@mantine/core'

const AppMenu = () => {
  return (
    <MenuDropdown className='pb-5 grid gap-3 px-2'>
      <MenuItem
        className='hover:bg-white hover:shadow-md rounded-lg py-3'
      >
        <div className='flex items-center gap-3'>
          <div>
            <img
              className='shadow-navbar p-2 rounded-lg'
              src="/icons/product-icon.svg" alt="product" />
          </div>
          <div className='text-black_300'>
            <h4 className='font-degularSemibold text-base'>Link in Bio</h4>
            <p className='font-degularMedium text-xs'>Manage your Link in Bio</p>
          </div>
        </div>
      </MenuItem>
      <MenuItem
        className='hover:bg-white hover:shadow-md rounded-lg py-3'
      >
        <div className='flex items-center gap-3'>
          <div>
            <img
              className='shadow-navbar p-2 rounded-lg'
              src="/icons/product-icon2.svg" alt="product2" />
          </div>
          <div className='text-black_300'>
            <h4 className='font-degularSemibold text-base'>Store</h4>
            <p className='font-degularMedium text-xs'>Manage your Store activities</p>
          </div>
        </div>
      </MenuItem>
      <MenuItem
        className='hover:bg-white hover:shadow-md rounded-lg py-3'
      >
        <div className='flex items-center gap-3'>
          <div>
            <img
              className='shadow-navbar p-2 rounded-lg'
              src="/icons/product-icon3.svg" alt="product3" />
          </div>
          <div className='text-black_300'>
            <h4 className='font-degularSemibold text-base'>Media Kit</h4>
            <p className='font-degularMedium text-xs'>Manage your Media Kit</p>
          </div>
        </div>
      </MenuItem>
      <MenuItem
        className='hover:bg-white hover:shadow-md rounded-lg py-3'
      >
        <div className='flex items-center gap-3'>
          <div>
            <img
              className='shadow-navbar p-2 rounded-lg'
              src="/icons/product-icon4.svg" alt="product4" />
          </div>
          <div className='text-black_300'>
            <h4 className='font-degularSemibold text-base'>Invoicing</h4>
            <p className='font-degularMedium text-xs'>Manage your invoices</p>
          </div>
        </div>
      </MenuItem>
      <MenuItem
        className='hover:bg-white hover:shadow-md rounded-lg py-3'
      >
        <div className='flex items-center gap-3'>
          <div>
            <img
              className='shadow-navbar p-2 rounded-lg'
              src="/icons/product-icon4.svg" alt="product5" />
          </div>
          <div className='text-black_300'>
            <h4 className='font-degularSemibold text-base'>Bookings</h4>
            <p className='font-degularMedium text-xs'>Manage your Bookings</p>
          </div>
        </div>
      </MenuItem>
    </MenuDropdown>
  )
}

export default AppMenu