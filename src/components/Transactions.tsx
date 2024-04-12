import { TransactionProps } from '../types'
import { formatDate } from '../utils/date'
import Button from './ui/Button'

const Transactions = ({ transaction, openFilterModal, isFilter, clearFilter }: TransactionProps) => {
  return (
    <section className='pb-16'>
      <div className='flex flex-col gap-5 md:flex-row md:justify-between md:items-center'>
        <div>
          <h3 className='font-degularBold text-2xl text-black_300'>{transaction?.length} Transactions</h3>
          <p className='font-degularMedium text-sm text-gray-400 font-medium'>Your transactions for the last 7 days</p>
        </div>
        <div className='flex items-center gap-4'>
          <Button
            text={`Filter`}
            onClick={openFilterModal}
            icon={
              <div className='flex items-center gap-1'>
                {isFilter &&
                  <p className='w-5 h-5 rounded-full bg-black_300 text-white flex items-center justify-center text-xs'>{transaction?.length}</p>
                }
                <img src="/icons/arrow-down.svg" alt="arrow-down" />
              </div>
            }
            className="flex items-center justify-center gap-3 px-5 h-12 text-black_300 bg-gray_50 rounded-full"
          />
          <Button
            text="Export"
            icon={<img src="/icons/export.svg" alt="export" />}
            className="flex items-center justify-center gap-3 w-[139px] h-12 text-black_300 bg-gray_50 rounded-full"
          />
        </div>
      </div>
      <hr className='bg-gray_50 w-full my-5 mb-7' />
      <section className='grid gap-6'>
        {transaction?.length > 0 ?
          transaction?.map((transaction) => (
            <div className='flex items-center justify-between'
              key={transaction?.payment_reference}
            >
              <div className='flex items-center gap-2'>
                <div className={`h-12 w-12 flex items-center justify-center rounded-full ${transaction.type === 'deposit' ? 'bg-green-50' : 'bg-red-50'}`}>
                  {transaction.type === 'deposit' ? (
                    <img src="/icons/incoming.svg" alt="incoming" />
                  ) : (
                    <img src="/icons/outgoing.svg" alt="outgoing" />
                  )}
                </div>
                <div>
                  <p className='font-degularMedium text-base text-black_300'>Psychology of Money </p>
                  <p className='font-degularMedium text-sm text-gray_400'>Roy Cash</p>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <p className='font-degularBold text-base text-black_300'>USD {transaction?.amount.toLocaleString()}</p>
                <p className='font-degularMedium text-sm text-gray_400'>{formatDate(transaction?.date)}</p>
              </div>
            </div>
          )) : (
            <NoTransaction
              clearFilter={clearFilter} />
          )
        }
      </section>
    </section>
  )
}

export default Transactions

const NoTransaction = ({ clearFilter }: { clearFilter: () => void }) => {
  return (
    <div className='grid place-content-center gap-3 w-[30%] mx-auto my-10'>
      <img src="/icons/no-data.svg" alt="no-data-icon" />
      <h2 className='font-degularBold text-[28px] leading-10 text-black_300'>No matching transaction found for the selected filter</h2>
      <p className='font-degularMedium text-base text-gray_400'>Change your filters to see more results, or add a new product.</p>
      <div>
        <Button
          text="Clear Filter"
          onClick={clearFilter}
          className='text-black_300 bg-gray_50 rounded-full w-[117px] h-12 font-degularSemibold text-base mt-3'
        />
      </div>
    </div>
  )
}