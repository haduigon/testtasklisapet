/* eslint-disable */
import React from 'react';
import './App.scss';
import InputText from './InputText';

// interface Props {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// export const Provider: React.FC<Props> = React.memo(({ onClick, children }) => (
//   <button type="button" onClick={onClick}>
//     {children}
//   </button>
// ));

export const App: React.FC = () => {
  return (
    <div>
      {/* <div className="starter"> */}
        <InputText />
      {/* </div> */}

      <div>
        {/* <pre className="caret-bar">
          <input /> <span>&nbsp;</span>
        </pre> */}

        {/* <pre className="caret-block">
          $ npm run buil<span>d</span>
        </pre>

        <pre className="caret-underscore">
          $ npm run build <span>&nbsp;</span>
        </pre> */}
      </div>
    </div>
  );
};
