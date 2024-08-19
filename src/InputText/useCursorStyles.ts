/* eslint-disable */
const Color = {
  front: '#70707B',
  back: 'lightgrey',
};

const GlobalStyles = `
  body {
    margin: 0;
    // background: ${Color.back};
    color: ${Color.front};
    font-family: 'Inter';
    font-size: 1em;
  }
`;

const hidden = `
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const MainStyled = `
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
`;

const LabelStyled = `.label {
  display: flex;
  align-items: center;
}

.label > span {
  margin: 1rem ; 
}`;

const blink = `
  @keyframes blink {
    0%  { opacity: 1; }
    49% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
  }
`;

const fontWidth = 12;
const InputMirrorStyled = (cursorChar: any, cursorPaused: any) => {
  console.log(cursorPaused, 'inpt mirror styles');
  return `
  .input-mirror {
  display: block;
  min-height: 1rem;
  width: 323px;
  height: 36px;
  word-break: break-all;
  white-space: pre-wrap;
  position: relative;
  border: 1px solid #D1D1D6;
  border-radius: 3px;
  padding: 8px 0;
  line-height: 18px;
  color: #70707B;
  padding-raght: 8px
  text-indent: 8px;
}

.input-mirror:focus {
    border-color: #2E90FA;
  box-shadow: #84CAFF 0px 0px 0px 2px;
  transition: .3s ease;
}


.input-mirror > span::before {
  content: "${cursorChar || ''}" ;
  position: absolute;
  placeholder: 'helol';
  background: black ;
  height: 18px ;
  width: ${fontWidth || 12}px ;
  display: inline-block ;
  ${!cursorPaused ? `animation: blink 1s ease infinite;` : ''}
}
`;
}

const applyStyles = (cursorChar: any, cursorPaused: any) => {

  const styleSheet = document.createElement('style');

  styleSheet.innerText = GlobalStyles + blink;
  document.head.appendChild(styleSheet);

  const st1: HTMLElement | null = document.querySelector('.main');
  const st2: HTMLElement | null = document.querySelector('.label');
  const st3: HTMLElement | null = document.querySelector('.input-hidden');
  const st4: HTMLElement | null = document.querySelector('.input-mirror');

  if (st1?.style) {
    st1.style.cssText = MainStyled;
  }
  if (st2?.style) {
    st2.style.cssText = LabelStyled;
  }
  if (st3?.style) {
    st3.style.cssText = hidden;

  }
  if (st4?.style) {
    const mirrorStyle = document.createElement('style');
    mirrorStyle.innerHTML = InputMirrorStyled(cursorChar, cursorPaused);
    document.head.appendChild(mirrorStyle);

  }


};

export {
  applyStyles,
};

