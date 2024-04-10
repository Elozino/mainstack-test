import { DatePickerInput } from '@mantine/dates';
import Button from './ui/Button';
import { Fragment, useState } from 'react';
import { MultiSelectCheckbox } from './ui/MultiSelectWithCheckBox';
import {
  // getDate, getLast7Days, getThisMonth, 
  getTodayDate, isDateWithinTimeFrame
} from '../utils/date';
import { FilterByProps, FilterModalProps, Transaction } from '../types';
import { filterBy } from '../constants/data';


const filterByDate = (date: string | undefined): string | undefined => {
  switch (date) {
    case 'Today':
      return getTodayDate();
    case 'Last 7 days':
      return getTodayDate();
    case 'This month':
      return getTodayDate();
    case 'Last 3 months':
      return getTodayDate();
    default:
      return undefined;
  }
}

const FilterModal = ({ close, setIsFilter, transactions, setFilteredData }: FilterModalProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedBtnTimeframe, setSelectedBtnTimeframe] = useState<string | undefined>('')
  const [transactionType, setTransactionType] = useState<string[]>([])
  const [transactionStatus, setTransactionStatus] = useState<string[]>([])

  const handleFilterTransaction = () => {
    if (transactions.length < 1) return;
    const sortArray = transactions.map((obj: Transaction) => ({
      ...obj,
      status: obj.status.toLowerCase()
    }))
    const transactionsStatus = transactionStatus.map(item => item.toLowerCase())
    const transactionsType = transactionType.map(item => item?.split(' ').join('_').toLowerCase())
    const filter = sortArray.filter((item) => {
      return transactionsStatus.includes(item?.status) || transactionsType.includes(item?.metadata?.type) &&
        isDateWithinTimeFrame(item?.date, filterByDate(selectedBtnTimeframe), getTodayDate())
    })

    setFilteredData(filter);
  };

  return (
    <aside className='h-[90dvh] flex flex-col justify-between'>
      <section className='flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h3 className='font-degularBold text-xl text-black_300 leading-[28.8px]'>Filter</h3>
          <img src="/icons/close.svg" alt="close"
            className='cursor-pointer'
            onClick={close}
          />
        </div>
        <div className='flex justify-between items-center gap-3'>
          {filterBy.map((item: FilterByProps) =>
            <Fragment key={item?.title}>
              <Button
                text={item?.title}
                className={`font-degularSemibold text-sm leading-4 text-black_300 border border-gray_50 rounded-full px-[18px] py-[10px]
              ${selectedBtnTimeframe === item?.title ? 'bg-black_300 text-white' : 'hover:bg-gray_50'}
              `}
                onClick={() => {
                  const title = item?.title
                  setSelectedBtnTimeframe(title)
                }}
              />
            </Fragment>
          )}
        </div>
        <div className='font-degularSemibold text-base text-black_300'>
          <h5 className='text-base'>Date Ranges</h5>
          <div className='flex justify-between items-center gap-2 mt-2'>
            <DatePickerInput
              placeholder="Pick date"
              value={startDate}
              onChange={setStartDate}
              className='w-full'
              mx="auto"
              maw={400}
              clearable
            />
            <DatePickerInput
              placeholder="Pick date"
              value={endDate}
              onChange={setEndDate}
              className='w-full'
              mx="auto"
              maw={400}
              clearable
            />
          </div>
        </div>
        <div className='font-degularSemibold text-base text-black_300'>
          <h5 className='text-base mb-2'>Transaction Type</h5>
          <MultiSelectCheckbox
            data={['Digital Product', 'Coffee', 'Webinar']}
            placeholder={'Transaction type'}
            value={transactionType}
            setValue={setTransactionType}

          />
        </div>
        <div className='font-degularSemibold text-base text-black_300'>
          <h5 className='text-base mb-2'>Transaction Status</h5>
          <MultiSelectCheckbox
            data={['Successful', 'Pending', 'Failed']}
            placeholder={'Transaction status'}
            value={transactionStatus}
            setValue={setTransactionStatus}
          />
        </div>
      </section>
      <section className='flex items-center justify-between gap-3 text-black_300 font-degularSemibold'>
        <Button
          text='Clear'
          className='w-full rounded-full border p-2 border-gray_50'
        />
        <Button
          text="Apply"
          className={`w-full rounded-full border p-2 border-gray_50
          ${selectedBtnTimeframe || transactionStatus || transactionType ? 'bg-black_300 text-white' : 'bg-gray_50 text-black'}
          `}
          onClick={() => {
            setIsFilter(true)
            handleFilterTransaction()
            close()
          }}
        />
      </section>
    </aside>
  )
}

export default FilterModal