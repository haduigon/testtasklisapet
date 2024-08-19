/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';

// Define the shape of the position state
interface Position {
  left: number;
  top: number;
}

const CaretSymbolInput: React.FC = () => {
  // Define refs with types
  const inputRef = useRef<HTMLInputElement | null>(null);
  const symbolRef = useRef<HTMLSpanElement | null>(null);
  
  // Define state with type Position
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 });

  const updatePosition = () => {
    const input = inputRef.current;
    const symbol = symbolRef.current;

    if (!input || !symbol) return;

    const caretPos = input.selectionStart ?? 0;

    // Create a temporary element to measure caret position
    const tempDiv = document.createElement('div');
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.position = 'absolute';
    tempDiv.style.whiteSpace = 'pre';
    tempDiv.textContent = input.value.slice(0, caretPos);
    document.body.appendChild(tempDiv);

    const caretRect = tempDiv.getBoundingClientRect();
    document.body.removeChild(tempDiv);

    const inputRect = input.getBoundingClientRect();
    const symbolWidth = symbol.offsetWidth;

    setPosition({
      left: caretRect.left - inputRect.left + caretRect.width - symbolWidth,
      // left: caretRect.left - inputRect.left + caretRect.width - symbolWidth,
      top: caretRect.top - inputRect.top - 75
    });
  };

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener('input', updatePosition);
      input.addEventListener('click', updatePosition);
      input.addEventListener('keyup', updatePosition);
      updatePosition(); // Initial position update

      return () => {
        input.removeEventListener('input', updatePosition);
        input.removeEventListener('click', updatePosition);
        input.removeEventListener('keyup', updatePosition);
      };
    }

    return;
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type here"
        style={{ paddingRight: '30px', boxSizing: 'border-box', fontSize: '16px' }}
      />
      <span
        ref={symbolRef}
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          fontSize: '16px',
          left: `${position.left}px`,
          top: `${position.top}px`
        }}
      >
        |
      </span>
    </div>
  );
};

export default CaretSymbolInput;

