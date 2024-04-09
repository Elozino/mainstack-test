import { Modal } from '@mantine/core';

const CustomModal = ({ opened, close, children }) => {
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