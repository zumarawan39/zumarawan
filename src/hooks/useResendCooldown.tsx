import { useState, useEffect, useCallback } from 'react';

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const useResendCoolDown = (initialSeconds = 60) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isCoolDown, setIsCoolDown] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isCoolDown && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft <= 0) {
      clearInterval(timer);
      setIsCoolDown(false);
    }

    return () => clearInterval(timer);
  }, [isCoolDown, secondsLeft]);

  const startCoolDown = useCallback(() => {
    setSecondsLeft(initialSeconds);
    setIsCoolDown(true);
  }, [initialSeconds]);

  const resetCoolDown = useCallback(() => {
    setSecondsLeft(0);
    setIsCoolDown(false);
  }, []);

  return {
    formattedTime: formatTime(secondsLeft),
    secondsLeft,
    isCoolDown,
    startCoolDown,
    resetCoolDown,
  };
};

export default useResendCoolDown;
