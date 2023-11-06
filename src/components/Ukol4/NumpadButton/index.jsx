import './style.css';

export const NumpadButton = ({ digit }) => {
  return (
    <button className="numpad-button">{digit}</button>
  );
};
