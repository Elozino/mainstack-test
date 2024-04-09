import { Menu } from '@mantine/core'

type ProfileProps = {
  first_name: string;
  last_name: string;
  email: string;
}

type ProfileMenuProps = {
  data: ProfileProps;
}

const ProfileMenu = ({ data }: ProfileMenuProps) => {
  return (
    <Menu.Dropdown className='p-3'>
      <Menu.Item>
        <div className='flex items-center gap-3'>
          <div className='w-[32px] h-[32px] rounded-full flex items-center justify-center bg-gradient-to-r from-gray_500 to-gray_600'>
            <span className='font-degularSemibold text-sm leading-4 text-white'>
              {data?.first_name.charAt(0)}{data?.last_name.charAt(0)}
            </span>
          </div>
          <div>
            <p className='font-degularBold text-base leading-4 text-black_300'>
              {data?.first_name} {data?.last_name}
            </p>
            <p className='font-degularMedium text-xs leading-4 text-black_300'>{data?.email}</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Settings</p>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Purchase History</p>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Refer and Earn</p>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Integrations</p>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Report Bug</p>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Switch Account</p>
      </Menu.Item>
      <Menu.Item
      // leftSection={}
      >
        <p>Sign Out</p>
      </Menu.Item>
    </Menu.Dropdown>

  )
}

export default ProfileMenu