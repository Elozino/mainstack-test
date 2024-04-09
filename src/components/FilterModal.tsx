import { DatePickerInput } from '@mantine/dates';
import Button from './ui/Button';
import { useState } from 'react';
import { MultiSelectCheckbox } from './ui/MultiSelectWithCheckBox';


type FilterByProps = { title: string };

const filterBy = [
  { title: 'Today' },
  { title: 'Last 7 days' },
  { title: 'This month' },
  { title: 'Lat 3 months' },
]

type FilterModalProps = {
  close: () => void;
}

const FilterModal = ({ close }: FilterModalProps) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <aside className='h-[90dvh] flex flex-col justify-between'>
      <section className='flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h3 className='font-degularBold text-xl text-black_300 leading-[28.8px]'>Filter</h3>
          <img src="/public/icons/close.svg" alt="close"
            className='cursor-pointer'
            onClick={close}
          />
        </div>
        <div className='flex justify-between items-center gap-3'>
          {filterBy.map((item: FilterByProps) =>
            <Button
              text={item?.title}
              className='font-degularSemibold text-sm leading-4 text-black_300 border border-gray_50 rounded-full px-[18px] py-[10px]
              hover:bg-gray_50
              '
            />
          )}
        </div>
        <div className='font-degularSemibold text-base text-black_300'>
          <h5 className='text-base'>Date Ranges</h5>
          <div className='flex justify-between items-center gap-2 mt-2'>
            <DatePickerInput
              placeholder="Pick date"
              value={value}
              onChange={setValue}
              className='w-full'
              mx="auto"
              maw={400}
            />
            <DatePickerInput
              placeholder="Pick date"
              value={value}
              onChange={setValue}
              className='w-full'
              mx="auto"
              maw={400}
            />
          </div>
        </div>
        <div className='font-degularSemibold text-base text-black_300'>
          <h5 className='text-base mb-2'>Transaction Type</h5>
          <MultiSelectCheckbox
            data={['Store Transaction', 'Get Tipped', 'Withdrawal', 'Chargebacks', 'Cashbacks', 'Refer & Earn']}
            placeholder={'Transaction type'}
          />
        </div>
        <div className='font-degularSemibold text-base text-black_300'>
          <h5 className='text-base mb-2'>Transaction Status</h5>
          <MultiSelectCheckbox
            data={['Successful', 'Pending', 'Failed']}
            placeholder={'Transaction status'}
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
          className='w-full rounded-full border p-2 border-gray_50 bg-gray_50'
        />
      </section>
    </aside>
  )
}

export default FilterModal