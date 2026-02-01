import { useEffect, useState } from "react";
import { moods } from "../../data";

function MoodApp() {
  const [mood, setMood] = useState(moods[0]);
  const [lazyMessage, setLazyMessage] = useState("");
  const changeMood = () => {
    const randomIndex = Math.floor(Math.random() * moods.length);
    setMood(moods[randomIndex]);
    setLazyMessage("");
  };
  useEffect(() => {
    document.body.style.backgroundColor = mood.color;

    const timer = setTimeout(() => {
      setLazyMessage("Bạn có muốn thay đổi tâm trạng không?");
    }, 5000);

    return () => clearTimeout(timer);
  }, [mood]);

  return (
    <div>
      <div>{mood.icon}</div>
      <div>{mood.name}</div>
      <button onClick={changeMood}>Thay đổi tâm trạng</button>
      {lazyMessage && <div>{lazyMessage}</div>}
    </div>
  );
}
export default MoodApp;
