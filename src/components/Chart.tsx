import { LineChart } from '@mantine/charts';
import { Transaction } from '../types';

function Chart({ transaction }: { transaction: Transaction[] }) {
  return (
    <div>
      <LineChart
        h={300}
        data={transaction}
        dataKey="date"
        yAxisProps={{ domain: [0, 100] }}
        series={[{ name: 'amount', color: 'orange' }]}
        strokeWidth={1.5}
        withYAxis={false}
        withDots={false}
        tickLine="x"
        gridAxis="none"
      />
    </div>
  );
}

export default Chart;