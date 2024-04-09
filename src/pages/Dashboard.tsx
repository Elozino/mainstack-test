import { useQuery } from '@tanstack/react-query'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Transactions from '../components/Transactions'
import { getTransactions } from '../services'
import WalletInfo from '../components/WalletInfo'
import { useDisclosure } from '@mantine/hooks'
import CustomDrawer from '../components/ui/CustomDrawer'
import FilterModal from '../components/FilterModal'

const Dashboard = () => {
  // const { opened  } = useDisclosure()
  const [opened, { open, close }] = useDisclosure(false);

  const { data } = useQuery({
    queryKey: ['getTransactions'],
    queryFn: getTransactions,
  })
  return (
    <div className='px-5 h-dvh'>
      <div className='sticky top-0 bg-white pt-3 z-50'>
        <Navbar />
      </div>
      <main className='flex items-center gap-3 h-[90dvh] w-full'>
        <Sidebar />
        <section className='h-full p-2 w-full pl-24 pr-32'>
          <WalletInfo />
          <Transactions
            openFilterModal={open}
            transaction={data}
          />
        </section>
      </main>
      <CustomDrawer
        opened={opened}
        close={close}
      >
        <FilterModal
          close={close}
        />
      </CustomDrawer>
    </div>
  )
}

export default Dashboard