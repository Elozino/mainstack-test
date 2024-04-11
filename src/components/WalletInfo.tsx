import { useQuery } from '@tanstack/react-query'
import { getWallet } from '../services'
import Chart from './Chart'
import Button from './ui/Button'
import { Transaction } from '../types'

const WalletInfo = ({ transaction }: { transaction: Transaction[] }) => {
  const { data } = useQuery({
    queryKey: ['getWallet'],
    queryFn: getWallet,
  });

  return (
    <section className='lg:flex justify-between mb-24 mt-10 gap-48'>
      <div className='lg:flex-[0.7] h-full'>
        <div className='flex items-end gap-24 mb-16'>
          <div>
            <p className='font-degularMedium text-gray-400 text-sm'>Available Balance</p>
            <p className='font-degularBold text-4xl leading-[48px] text-black_300'>USD {data?.balance.toLocaleString()}</p>
          </div>
          <Button
            text="Withdraw"
            className="bg-black_300 text-white w-[167px] rounded-full flex justify-center items-center h-[52px] font-degularSemibold"
          />
        </div>
        <Chart
          transaction={transaction}
        />
      </div>
      <div className='lg:flex-[0.3] grid gap-8 mt-20'>
        <div>
          <div className='flex justify-between items-end'>
            <p className='font-degularMedium text-sm text-gray-400'>Ledger Balance</p>
            <img src="/icons/info.svg" alt="info" />
          </div>
          <p className='font-degularBold text-[28px] leading-[38px] text-black_300'>USD {data?.ledger_balance.toLocaleString()}</p>
        </div>
        <div>
          <div className='flex justify-between items-end'>
            <p className='font-degularMedium text-sm text-gray-400'>Total Payout</p>
            <img src="/icons/info.svg" alt="info" />
          </div>
          <p className='font-degularBold text-[28px] leading-[38px] text-black_300'>USD {data?.total_payout.toLocaleString()}</p>
        </div>
        <div>
          <div className='flex justify-between items-end'>
            <p className='font-degularMedium text-sm text-gray-400'>Total Revenue</p>
            <img src="/icons/info.svg" alt="info" />
          </div>
          <p className='font-degularBold text-[28px] leading-[38px] text-black_300'>USD {data?.total_revenue.toLocaleString()}</p>
        </div>
        <div>
          <div className='flex justify-between items-end'>
            <p className='font-degularMedium text-sm text-gray-400'>Pending Payout</p>
            <img src="/icons/info.svg" alt="info" />
          </div>
          <p className='font-degularBold text-[28px] leading-[38px] text-black_300'>USD {data?.pending_payout.toLocaleString()}</p>
        </div>
      </div>
    </section>
  )
}

export default WalletInfo