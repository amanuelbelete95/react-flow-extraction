import React from 'react';

function Button({
  handleClick,
  text,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Button;
