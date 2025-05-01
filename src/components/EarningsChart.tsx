import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define the shape of each data entry
interface ChartData {
  name: string;
  total: number;
  fees: number;
}

// Your chart data
const data: ChartData[] = [
  { name: "Mon", total: 50000, fees: 30000 },
  { name: "Tue", total: 10000, fees: 20000 },
  { name: "Wed", total: 50000, fees: 60000 },
  { name: "Thu", total: 70000, fees: 50000 },
  { name: "Fri", total: 70000, fees: 50000 },
  { name: "Sat", total: 0, fees: 0 },
  { name: "Sun", total: 75000, fees: 90000 },
];

const EarningsChart: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="h5 fw-semibold mb-3">Earnings</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center gap-1">
            <span
              className="rounded-circle d-inline-block"
              style={{ width: "10px", height: "10px", backgroundColor: "#3b82f6" }}
            ></span>
            <span>Total Collections</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <span
              className="rounded-circle d-inline-block"
              style={{ width: "10px", height: "10px", backgroundColor: "#ff4d4f" }}
            ></span>
            <span>Fees Collection</span>
          </div>
        </div>
        <div className="text-muted small">Jan 20, 2019</div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis domain={[0, 100000]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="fees"
            stroke="#ff4d4f"
            fillOpacity={1}
            fill="url(#colorFees)"
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTotal)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 d-flex justify-content-between">
        <div>
          <p className="text-muted small mb-1">Total Collections</p>
          <p className="fw-bold fs-6 mb-0">$75,000</p>
        </div>
        <div>
          <p className="text-muted small mb-1">Fees Collection</p>
          <p className="fw-bold fs-6 mb-0">$15,000</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
