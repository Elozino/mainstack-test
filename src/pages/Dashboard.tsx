import { useQuery } from '@tanstack/react-query'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Transactions from '../components/Transactions'
import { getTransactions } from '../services'
import WalletInfo from '../components/WalletInfo'
import { useDisclosure } from '@mantine/hooks'
import CustomDrawer from '../components/ui/CustomDrawer'
import FilterModal from '../components/FilterModal'
import { useMemo, useState } from 'react'
import { Transaction } from '../types'

const Dashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [filteredData, setFilteredData] = useState<Transaction[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false)

  const { data } = useQuery({
    queryKey: ['getTransactions'],
    queryFn: getTransactions,
  })

  const transactions = useMemo(() => {
    if (isFilter) {
      return filteredData
    } else {
      return data;
    }
  }, [data, filteredData, isFilter])

  return (
    <div className='px-5 h-dvh'>
      <div className='sticky top-0 bg-white pt-3 z-50'>
        <Navbar />
      </div>
      <main className='flex items-center gap-3 h-[90dvh] w-full'>
        <Sidebar />
        <section className='h-full p-2 w-full pl-24 md:pr-10 lg:pr-32'>
          <WalletInfo />
          <Transactions
            openFilterModal={open}
            isFilter={isFilter}
            transaction={transactions}
          />
        </section>
      </main>
      <CustomDrawer
        opened={opened}
        close={close}
      >
        <FilterModal
          close={close}
          setIsFilter={setIsFilter}
          transactions={data}
          setFilteredData={setFilteredData}
        />
      </CustomDrawer>
    </div>
  )
}

export default Dashboard