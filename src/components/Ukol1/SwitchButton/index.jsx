import './style.css';

export const SwitchButton = ({ label }) => {
  return (
    <button className="switch-button switch-button--on">
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
