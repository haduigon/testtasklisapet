/* eslint-disable */
import { useState, useRef, useEffect } from 'react';
import styles2 from './InputText.module.scss';
import useCursor from './useCursor';
import { applyStyles } from './useCursorStyles';

const InputText = () => {

  const [content, setContent] = useState('');

  const {
    handleOnFocus: handleOnFocusCursor,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused
  }: any = useCursor(content);

  

  const refInput: any = useRef();

  function handleChange(event: any) {
    setContent(event.target.value)
  }

  function handleOnFocusLabel(event: any) {
    if (refInput.current) {
      refInput.current.focus();
      handleOnFocusCursor(event);
    }

     const inputMirror: any = document.querySelector('.input-mirror');
  if (inputMirror) {
    inputMirror.focus();
  }
  }

  const cursorPosition = content.length - shifts;

  const [beforeCursor, inCursor, afterCursor] = [
    content.slice(0, cursorPosition),
    content.charAt(cursorPosition),
    content.slice(cursorPosition + 1)
  ]

  useEffect(() => {
    applyStyles(inCursor, paused)
  }, [inCursor, paused])

  
  return (
    <div className={styles2.box}>

      <div className='main'>

      </div>

      <div className='main'>
        <label
          className='label'
          onClick={handleOnFocusLabel}
          tabIndex={0}
        >
          <span>input:</span>
          <span 
            className='input-mirror' 
            tabIndex={0}
            style={{

            }}
          >
            {beforeCursor}
            <span className='cursor-box' tabIndex={0}>{inCursor}</span>
            {afterCursor}
            <input
              ref={refInput}
              className='input-hidden'
              onKeyDown={(event) => handleKeyDown(event)}
              onChange={(event) => handleChange(event)}
              onBlur={() => handleOnBlur()}
            />
          </span>
        </label>
      </div>

    </div>
  )
};

export default InputText;

