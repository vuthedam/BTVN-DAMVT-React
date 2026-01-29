import { useState } from "react";
// Mô tả
// Tạo game đoán số ngẫu nhiên.

// Yêu cầu
// Sử dụng kiến thức về useState.

// Component GuessingGame, dùng useState lưu: số bí mật, số đoán, lịch sử đoán, trạng thái game (chơi/thắng/thua), lượt còn lại (10).

// Input cho người dùng nhập số muốn đoán và khi nhấn nút đoán sẽ kiểm tra kết quả.

// Chọn độ khó của trò chơi (dễ: 1-50, trung bình: 1-100, khó: 1-200,)

// Có gợi ý cho con số ngẫu nhiên là cao hoặc thấp.

// Phần lịch sử chơi sẽ hiển thị ra và tô thêm màu sắc nếu số đó là số gần đúng cách khoảng 20%-30% số thì để là màu xanh còn, hơn thì là màu đỏ.

// Hiển thị ra thông báo thắng/thua khi kết thúc 10 lượt hoặc đoán đúng, bổ sung thêm nút reset cho người dùng chơi lại.

function GuessingGame() {
  const [level, setLevel] = useState(100);
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState("playing");
  const [turn, setTurn] = useState(10);
  const [hint, setHint] = useState("");

  // đổi độ khó
  function Level(e) {
    const value = Number(e.target.value);
    setLevel(value);
    resetGame(value);
  }

  function handleGuess() {
    if (status !== "playing") return;

    const number = Number(guess);
    if (!number || number < 1 || number > level) {
      alert("Nhập số hợp lệ!");
      return;
    }

    if (number > random) setHint(" Số bạn đoán CAO hơn");
    else if (number < random) setHint(" Số bạn đoán THẤP hơn");
    else setHint("🎉 Chính xác!");

    setHistory([...history, number]);
    setTurn(turn - 1);

    if (number === random) {
      setStatus("win");
      return;
    }

    if (turn - 1 === 0) {
      setStatus("lose");
    }

    setGuess("");
  }

  function resetGame(newLevel = level) {
    setRandom(Math.floor(Math.random() * newLevel) + 1);
    setGuess("");
    setHistory([]);
    setStatus("playing");
    setTurn(10);
    setHint("");
  }

  return (
    <div>
      <h1> Game Đoán Số</h1>

      <label>Chọn độ khó: </label>
      <select onChange={Level} value={level}>
        <option value={50}>Dễ (1-50)</option>
        <option value={100}>Trung bình (1-100)</option>
        <option value={200}>Khó (1-200)</option>
      </select>

      <p>Lượt còn lại: {turn}</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={status !== "playing"}
      />

      <button onClick={handleGuess} disabled={status !== "playing"}>
        Đoán
      </button>

      <p>{hint}</p>

      {status === "win" && <h3> Bạn thắng!</h3>}
      {status === "lose" && <h3> Bạn thua! Số đúng là {random}</h3>}

      <h4>Lịch sử đoán:</h4>
      <ul>
        {history.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <button onClick={() => resetGame()}> Chơi lại</button>
    </div>
  );
}

export default GuessingGame;
