import Button from './ui/Button'

type Transaction = {
  payment_reference: string;
  type: 'credit' | 'deposit';
  amount: number;
  date: string;
};


type TransactionProps = {
  transaction: Transaction[];
  openFilterModal: () => void;
}

const Transactions = ({ transaction, openFilterModal }: TransactionProps) => {
  return (
    <section className='pb-16'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='font-degularBold text-2xl text-black_300'>{transaction?.length} Transactions</h3>
          <p className='font-degularMedium text-sm text-gray-400 font-medium'>Your transactions for the last 7 days</p>
        </div>
        <div className='flex items-center gap-4'>
          <Button
            text="Filter"
            onClick={openFilterModal}
            icon={<img src="/icons/arrow-down.svg" alt="arrow-down" />}
            className="flex items-center justify-center gap-3 w-[107px] h-12 text-black_300 bg-gray_50 rounded-full"
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
        {transaction?.map((transaction) => (
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
              <p className='font-degularBold text-base text-black_300'>USD {transaction?.amount}</p>
              <p className='font-degularMedium text-sm text-gray_400'>Apr 03,2022 {transaction?.date}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Transactions