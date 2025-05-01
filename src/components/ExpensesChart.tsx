import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface ExpenseData {
  name: string;
  amount: number;
}

const data: ExpenseData[] = [
  { name: 'Jan', amount: 125000 },
  { name: 'Feb', amount: 100000 },
  { name: 'Mar', amount: 75000 },
];

const ExpensesChart: React.FC = () => {
  const colors = ['#20ded0', '#468ef9', '#ffa943'];

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-semibold">Expenses</h5>
        <div className="d-flex justify-content-between mb-3 text-center">
          <div>
            <small className="text-muted d-block">Jan 2019</small>
            <strong className="text-success">$ 15,000</strong>
            <div className="bg-success mt-1" style={{ height: '3px', width: '100%' }}></div>
          </div>
          <div>
            <small className="text-muted d-block">Feb 2019</small>
            <strong className="text-primary">$ 10,000</strong>
            <div className="bg-primary mt-1" style={{ height: '3px', width: '100%' }}></div>
          </div>
          <div>
            <small className="text-muted d-block">Mar 2019</small>
            <strong className="text-warning">$ 8,000</strong>
            <div className="bg-warning mt-1" style={{ height: '3px', width: '100%' }}></div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={365}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 150000]} tickFormatter={(v) => `${v / 1000}k`} />
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
              {data.map((_, idx) => (
                <Cell key={`cell-${idx}`} fill={colors[idx]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensesChart;
