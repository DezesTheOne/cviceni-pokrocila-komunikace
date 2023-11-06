import './style.css';

export const CoinButton = ({ value }) => {
  return (
    <button className="icon-button">
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
