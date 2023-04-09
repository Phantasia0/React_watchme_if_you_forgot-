// import ColorContext from '../contexts/color';
// import { ColorConsumer } from '../contexts/color';

// import React from 'react';

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {(value) => (
//         <div>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: value.state.color,
//             }}
//           />
//           <div
//             style={{
//               width: '32px',
//               height: '32px',
//               background: value.state.subColor,
//             }}
//           />
//         </div>
//       )}
//     </ColorConsumer>
//   );
// };

// export default ColorBox;

/* HOOKS */

import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subColor,
        }}
      />
    </>
  );
};

export default ColorBox;
