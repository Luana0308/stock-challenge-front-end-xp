import React, { ReactElement } from 'react';
import ReactLoading from 'react-loading';

function Loader(): ReactElement {
  return (
    <ReactLoading
      type="spinningBubbles"
      color="#003566"
      height={667}
      width={375}
    />
  );
}

export default Loader;
