/* eslint-disable */
import { useState } from 'react';

function useCursor(content: any) {
  const [shifts, setShifts] = useState(0);
  const [paused, setPaused] = useState(true);

  let timeoutRef: any = null;

  function pauseWithTimeout() {
    setPaused(true);

    clearTimeout(timeoutRef);

      timeoutRef = setTimeout(() => {
    setPaused(false);
  }, 500);
  }



  function updateShifts(key: any) {
    switch (key) {
      case 'ArrowLeft':
        if (content.length > shifts) {
          setShifts(shifts + 1);
        }
        break;
      case 'ArrowRight':
        if (content.length > 0) {
          setShifts(shifts - 1);
        }
        break;
      case 'Delete':
        if (content.length >= shifts) {
          setShifts(shifts - 1);
        }
        break;
      case 'Home':
      case 'ArrowUp':
        setShifts(content.length);
        break;
      case 'End':
      case 'ArrowDown':
        setShifts(0);
        break;
      default:
        break;
    }
  }

  function handleOnFocus() {
    setPaused(false);
  }

  function handleOnBlur() {
    setPaused(true);
    console.log(paused, 'useCursor');
    
  }

  function handleKeyDown({ key }: any) {
    pauseWithTimeout();

    updateShifts(key);
  }

  return {
    handleOnFocus,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused,
  };
}

export default useCursor;
