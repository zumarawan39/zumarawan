
export const playClickSound = () => {
  const audio = new Audio('../assets/sounds/click2.mp3');
  audio.volume = 1;
  audio.play().catch((err) => console.error("Audio play error:", err));
};
