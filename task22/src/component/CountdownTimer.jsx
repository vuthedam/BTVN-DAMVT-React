import { useEffect, useRef, useState } from "react";

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [status, setStatus] = useState("end");
  const intervalRef = useRef(null);

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setStatus("end");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [status]);

  const start = () => {
    const value = Number(inputSeconds);
    if (!value || value <= 0) return;

    setTimeLeft(value);
    setStatus("running");
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setStatus("paused");
  };

  const resume = () => {
    setStatus("running");
  };

  const isInputInvalid = !inputSeconds || Number(inputSeconds) <= 0;

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>{formatTime(timeLeft)}</h1>

      <input
        type="number"
        placeholder="Nhập số giây"
        value={inputSeconds}
        disabled={status === "running" || status === "paused"}
        onChange={(e) => setInputSeconds(e.target.value)}
      />

      <div style={{ marginTop: 20 }}>
        {status === "end" && (
          <button onClick={start} disabled={isInputInvalid}>
            Bắt đầu
          </button>
        )}

        {status === "running" && <button onClick={pause}>Tạm dừng</button>}

        {status === "paused" && <button onClick={resume}>Tiếp tục</button>}
      </div>
    </div>
  );
}

export default CountdownTimer;
