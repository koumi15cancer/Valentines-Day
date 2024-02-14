import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;



  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Chắc Humm?",
      "Chắc chắn Humm?",
      "Chọn lại oii!",
      "Chọn sai oi! Lại nữa oii",
      "Bấm lộn òii, Bấm lại coii?",
      "Chọn lại coii hong hết cơ hội",
      "Lại bấm lộn òii kìaa, nút màu xanh  cơ màa!",
      "Bấm lộn là hết cơ hội đó, nút màu xanh óo",
      "Cậu thấy đóo, chỉ có 1 lựa chọnn!",
      "Cậu có thấy nút nào giờ to quá hemm!",
      "Nút màu xanh đi òo!",
      "Suy nghĩ kĩ lại xemm",
      "Cân nhắc lại oii?",
      "Thiệt hỏo?",
      "Bùnn lémm",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  function getRandomPosition(): { x: number, y: number } {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  }
  
  // Function to update the position of all GIFs
  function updateGIFsPosition(): void {
    const gifs = document.querySelectorAll('.gif') as NodeListOf<HTMLImageElement>;
    gifs.forEach(gif => {
      const position = getRandomPosition();
      gif.style.left = `${position.x}px`;
      gif.style.top = `${position.y}px`;
    });
  }
  
  // Update the position of GIFs initially
  updateGIFsPosition();
  
  // Update the position of GIFs every 3 seconds (adjust as needed)
  setInterval(updateGIFsPosition, 3000);

  return (
    
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/OdsUDG_5TrwAAAAi/mamegoma-baby.gif" />
            <div className="text-container">So u chose Yes!!! Hehe</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media.tenor.com/Fk25B5wkHSEAAAAi/mamegoma-baby.gif"
            />
            <h1 className="text-container">Will you "Đứm" me on this Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                
                onClick={() => setYesPressed(true)}
              >
             Yes
                
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
              
            </div>
            
          </>
        )}
      </div>
      <img className="gif" src="https://media.tenor.com/temsz9f6WucAAAAj/mamegoma-group.gif" alt="GIF 1" />
    </div>
  );
}
