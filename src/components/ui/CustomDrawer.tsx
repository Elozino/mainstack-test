import { Drawer } from '@mantine/core'

type CustomDrawerProps = {
  opened: boolean;
  close: () => void;
  children: Readonly<JSX.Element>;
}

const CustomDrawer = ({ opened, close, children }: CustomDrawerProps) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        withCloseButton={false}
        className='bg-transparent'
        offset={20}
        radius={20}
        size={500}
      >
        {children}
      </Drawer>

    </>
  )
}

export default CustomDrawer