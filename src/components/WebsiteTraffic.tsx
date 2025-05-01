import React from "react";

interface TrafficSource {
  label: string;
  color: string;
  value: number;
  percentage: number;
}

const WebsiteTraffic: React.FC = () => {
  const trafficData: TrafficSource[] = [
    { label: "Direct", color: "#00E3A5", value: 12890, percentage: 50 },
    { label: "Search", color: "#2962FF", value: 7245, percentage: 27 },
    { label: "Referrals", color: "#FFA800", value: 4256, percentage: 8 },
    { label: "Social", color: "#F93232", value: 500, percentage: 7 },
  ];

  return (
    <div className="card shadow-sm" style={{ height: "450px", width: "100%" }}>
      <div className="card-body d-flex flex-column justify-content-between h-100">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-semibold mb-0">Website Traffic</h5>
          <div className="text-muted">...</div>
        </div>
  
        <div>
          <div className="text-muted small mb-1">Unique Visitors</div>
          <h2 className="fw-bold mb-3">2,590</h2>
  
          <div className="progress mb-4" style={{ height: "8px", borderRadius: "8px" }}>
            {trafficData.map((item, index) => (
              <div
                key={index}
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                }}
              />
            ))}
          </div>
  
          {trafficData.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center mb-3"
            >
              <div className="d-flex align-items-center">
                <span
                  className="me-2"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: item.color,
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span className="fw-semibold">{item.label}</span>
              </div>
              <div>
                <span className="me-3 text-muted">{item.value.toLocaleString()}</span>
                <span className="text-muted">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};
export default WebsiteTraffic;

