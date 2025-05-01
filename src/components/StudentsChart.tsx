import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface StudentData {
  name: string;
  value: number;
}

const data: StudentData[] = [
  { name: "Female", value: 45000 },
  { name: "Male", value: 105000 },
];

const COLORS = ["#468ef9", "#ffa943"];

const StudentsChart: React.FC = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-semibold">Students</h5>

        <ResponsiveContainer width="100%" height={365}>
          <PieChart>
            <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="d-flex justify-content-around pt-3 border-top">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center mb-1">
              <div className="bg-primary rounded-pill me-2" style={{ width: 12, height: 6 }}></div>
              <small className="text-muted">Female Students</small>
            </div>
            <div className="fw-bold">45,000</div>
          </div>

          <div className="border-start mx-2"></div>

          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center mb-1">
              <div className="bg-warning rounded-pill me-2" style={{ width: 12, height: 6 }}></div>
              <small className="text-muted">Male Students</small>
            </div>
            <div className="fw-bold">1,05,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsChart;