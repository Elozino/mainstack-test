import { LineChart } from '@mantine/charts';

const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
function Chart() {
  return (
    <div>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        yAxisProps={{ domain: [0, 100] }}
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        strokeWidth={1}
        withYAxis={false}
        withDots={false}
        // tickLine="none"
        // gridAxis="none"
      />
    </div>
  );
}

export default Chart;