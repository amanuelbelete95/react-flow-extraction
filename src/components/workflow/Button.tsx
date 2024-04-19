import React from 'react';
import Styles from '';

type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;
function Button({
  handleClick,
  text,
}: {
  handleClick: ClickHandler;
  text: string;
}) {
  return (
    <div>
      <button
        onClick={handleClick}
        className={Styles.button}>
        {text}
      </button>
    </div>
  );
}

export default Button;
