import React from 'react';

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
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Button;
