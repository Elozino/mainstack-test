import { DatePickerInput } from '@mantine/dates';
import { Fragment } from 'react';
import { filterBy } from '../constants/data';
import { FilterByProps, FilterModalProps } from '../types';
import Button from './ui/Button';
import { MultiSelectCheckbox } from './ui/MultiSelectWithCheckBox';


const FilterModal = ({
  close,
  setIsFilter,
  clearFilter,
  startDate,
  endDate,
  transactionType,
  handleFilterTransaction,
  transactionStatus,
  selectedBtnTimeframe,
  handleSelectTimeFrame,
  setEndDate,
  setStartDate,
  setTransactionType,
  setTransactionStatus,
}: FilterModalProps) => {
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
                  handleSelectTimeFrame(item?.title)
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
          onClick={clearFilter}
        />
        <Button
          text="Apply"
          className={`w-full rounded-full border p-2 border-gray_50
          ${selectedBtnTimeframe || transactionStatus || transactionType ? 'bg-black_300 text-white' : 'bg-gray_50 text-black'}
          `}
          onClick={() => {
            setIsFilter(true)
            close()
            handleFilterTransaction()
          }}
        />
      </section>
    </aside>
  )
}

export default FilterModal