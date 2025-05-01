import React, { useState } from "react";

const EventCalendar: React.FC = () => {
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 5)); // April 5, 2025

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "day") newDate.setDate(newDate.getDate() - 1);
    else if (viewMode === "week") newDate.setDate(newDate.getDate() - 7);
    else if (viewMode === "month") newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "day") newDate.setDate(newDate.getDate() + 1);
    else if (viewMode === "week") newDate.setDate(newDate.getDate() + 7);
    else if (viewMode === "month") newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const getStartOfWeek = (date: Date): Date => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    return start;
  };

  const getWeekDates = (startDate: Date): Date[] => {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      week.push(date);
    }
    return week;
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDayIndex = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const dates: (number | null)[] = [];
    for (let i = 0; i < startDayIndex; i++) dates.push(null);
    for (let i = 1; i <= totalDays; i++) dates.push(i);
    while (dates.length < 42) dates.push(null);

    return (
      <table className="table table-borderless text-center">
        <thead>
          <tr className="text-muted small">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {dates.slice(rowIndex * 7, rowIndex * 7 + 7).map((date, index) => (
                <td
                  key={index}
                  className={`py-2 ${
                    date === currentDate.getDate() &&
                    currentDate.getMonth() === month
                      ? "bg-warning bg-opacity-25 rounded"
                      : ""
                  }`}
                >
                  {date ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderWeekView = () => {
    const weekStart = getStartOfWeek(currentDate);
    const week = getWeekDates(weekStart);

    return (
      <table className="table table-bordered text-center">
        <thead>
          <tr className="small text-muted">
            {week.map((date) => {
              const day = date.toLocaleDateString("en-US", { weekday: "short" });
              const label = `${date.getMonth() + 1}/${date.getDate()}`;
              return (
                <th key={label} className="fw-medium">
                  {day} {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {week.map((date, index) => (
              <td
                key={index}
                className={`${
                  date.toDateString() === currentDate.toDateString()
                    ? "bg-warning bg-opacity-25"
                    : ""
                }`}
                style={{ height: "100px" }}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

  const renderDayView = () => {
    const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });

    return (
      <div>
        <div className="text-center fw-bold mb-2">{dayName}</div>
        <div className="bg-warning bg-opacity-10 rounded p-4" style={{ minHeight: "150px" }}>
          {/* Events can go here */}
        </div>
      </div>
    );
  };

  const renderHeaderLabel = () => {
    if (viewMode === "month") {
      return currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
    if (viewMode === "week") {
      const start = getStartOfWeek(currentDate);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return `${start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })} – ${end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}`;
    }
    return currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-semibold">Event Calendar</h5>
          <div className="text-muted">...</div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold m-0">{renderHeaderLabel()}</h6>
          <div>
            <button onClick={handlePrev} className="btn btn-sm btn-light me-1">
              &lt;
            </button>
            <button onClick={handleNext} className="btn btn-sm btn-light">
              &gt;
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <div className="btn-group bg-light rounded-pill shadow-sm p-1">
            {["day", "week", "month"].map((mode) => (
              <button
                key={mode}
                className={`btn btn-sm rounded-pill ${
                  viewMode === mode ? "text-white" : "btn-light"
                }`}
                style={{
                  backgroundColor: viewMode === mode ? "#f8007b" : undefined,
                }}
                onClick={() => setViewMode(mode as "day" | "week" | "month")}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="table-responsive">
          {viewMode === "month" && renderMonthView()}
          {viewMode === "week" && renderWeekView()}
          {viewMode === "day" && renderDayView()}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
