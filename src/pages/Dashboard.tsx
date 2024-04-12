import { useDisclosure } from '@mantine/hooks'
import { useCallback, useMemo, useState } from 'react'
import FilterModal from '../components/FilterModal'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Transactions from '../components/Transactions'
import WalletInfo from '../components/WalletInfo'
import CustomDrawer from '../components/ui/CustomDrawer'
import useTanStackQuery from '../hooks/useTanStackQuery'
import { getTransactions } from '../services'
import { Transaction } from '../types'
import { filterByDate, getTodayDate, isDateWithinTimeFrame } from '../utils/date'

const Dashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [filteredData, setFilteredData] = useState<Transaction[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false)

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedBtnTimeframe, setSelectedBtnTimeframe] = useState<string | undefined>('')
  const [transactionType, setTransactionType] = useState<string[]>([])
  const [transactionStatus, setTransactionStatus] = useState<string[]>([])

  const { data } = useTanStackQuery('getTransactions', getTransactions)

  const transactions = useMemo(() => {
    if (isFilter) {
      return filteredData
    } else {
      return data;
    }
  }, [data, filteredData, isFilter])

  const handleFilterTransaction = useCallback(() => {
    if (transactions.length < 1) return;
    if (!transactionStatus && !transactionType && !startDate && !endDate && !selectedBtnTimeframe) {
      setFilteredData(data);
      return;
    }
    const sortArray = data.map((obj: Transaction) => ({
      ...obj,
      status: obj.status.toLowerCase()
    }))
    const transactionsStatus = transactionStatus.map(item => item.toLowerCase())
    const transactionsType = transactionType.map(item => item?.split(' ').join('_').toLowerCase())
    const filter = sortArray.filter((item: { status: string; metadata: { type: string }; date: string }) => {
      return transactionsStatus.includes(item?.status) || transactionsType.includes(item?.metadata?.type)
        // @ts-expect-error undefined
        || isDateWithinTimeFrame(item?.date, filterByDate(selectedBtnTimeframe), getTodayDate())
    })

    setFilteredData(filter);
  }, [data, endDate, selectedBtnTimeframe, startDate, transactionStatus, transactionType, transactions.length]);

  const clearFilter = () => {
    setIsFilter(false);
    setTransactionStatus([]);
    setTransactionType([]);
    setSelectedBtnTimeframe('')
    setStartDate(null)
    setEndDate(null)
  }

  const clearTransactionFilter = () => {
    setFilteredData(data);
    setIsFilter(false);
    setTransactionStatus([]);
    setTransactionType([]);
    setSelectedBtnTimeframe('')
    setStartDate(null)
    setEndDate(null)
  }

  const handleSelectTimeFrame = (title: string) => {
    setSelectedBtnTimeframe(title)
  }


  return (
    <div className='px-5 h-dvh'>
      <div className='sticky top-0 bg-white pt-3 z-50'>
        <Navbar />
      </div>
      <main className='flex items-center gap-3 h-[90dvh] w-full'>
        <Sidebar />
        <section className='h-full p-2 w-full pl-24 md:pr-10 lg:pr-32'>
          <WalletInfo
            transaction={transactions}
          />
          <Transactions
            openFilterModal={open}
            isFilter={isFilter}
            transaction={transactions}
            clearFilter={clearTransactionFilter}
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
          clearFilter={clearFilter}
          handleFilterTransaction={handleFilterTransaction}
          startDate={startDate}
          endDate={endDate}
          selectedBtnTimeframe={selectedBtnTimeframe}
          transactionType={transactionType}
          transactionStatus={transactionStatus}
          handleSelectTimeFrame={handleSelectTimeFrame}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setTransactionType={setTransactionType}
          setTransactionStatus={setTransactionStatus}
        />
      </CustomDrawer>
    </div>
  )
}

export default Dashboard