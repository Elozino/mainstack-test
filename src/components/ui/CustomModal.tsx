import { Modal } from '@mantine/core';

type CustomModalProps = {
  opened: boolean;
  close: () => void;
  children: Readonly<JSX.Element>;
}

const CustomModal = ({ opened, close, children }: CustomModalProps) => {
  return (
    <>
      <Modal opened={opened} onClose={close} title="Filter"
        yOffset="1vh" xOffset='30vh'>
        {/* Modal content */}
        {children}
      </Modal>

    </>
  )
}

export default CustomModal