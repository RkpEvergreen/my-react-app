import React from "react";

interface NoticeItem {
  date: string;
  title: string;
  description: string;
  color: string;
  user: string;
  timeAgo: string;
}

const notices: NoticeItem[] = [
  {
    date: "16 June, 2019",
    title: "Great School manag mene esom text of the printing.",
    description: "",
    color: "#18e3d0", // teal
    user: "Jennyfar Lopez",
    timeAgo: "5 min ago",
  },
  {
    date: "16 June, 2019",
    title: "Great School manag printing.",
    description: "",
    color: "#ffd966", // yellow
    user: "Jennyfar Lopez",
    timeAgo: "5 min ago",
  },
  {
    date: "16 June, 2019",
    title: "Great School manag meneesom.",
    description: "",
    color: "#f82c91", // pink
    user: "Jennyfar Lopez",
    timeAgo: "5 min ago",
  },
  {
    date:"16 June, 2019",
    title:"Great School manag mene esom text of the printing.",
    description:"",
    color:"#40dfcd",
    user:"Jennyfar Lopez",
    timeAgo:"5 min ago",
  },
  {
    date:"16 June, 2019",
    title:"Great School manag printing.",
    description:"",
    color:"#fbd540",
    user:"Jennyfar Lopez",
    timeAgo:"5 min ago",
  },
  {
    date:"16 June, 2019",
    title:"Great School manag printing.",
    description:"",
    color:"#f939a1",
    user:"Jennyfar Lopez",
    timeAgo:"5 min ago",
  }

];

const NoticeBoard: React.FC = () => {
  return (
    <div className="card shadow-sm" style={{ height: "450px", width: "100%" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="fw-semibold mb-3">Notice Board</h5>

        <div className="overflow-auto" style={{ maxHeight: "400px", paddingRight: "10px" }}>
          {notices.map((notice, index) => (
            <div key={index} className="mb-4 pb-2 border-bottom">
              <span
                className="badge rounded-pill text-white mb-2"
                style={{ backgroundColor: notice.color }}
              >
                {notice.date}
              </span>
              <div className="fw-semibold">{notice.title}</div>
              <div className="text-muted small">
                {notice.user} / {notice.timeAgo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
