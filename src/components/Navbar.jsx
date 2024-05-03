import  { useState } from "react";
import { useCurrency } from "../context/useContext";
import Watchlist from "../pages/Watchlist";

function Navbar() {
  const { currency, setCurrency } = useCurrency();
  const [showModal, setShowModal] = useState(false);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
    <div className="header">
      <h1>CRYPTOFOLIO</h1>
      <div className="header-items">
        <select name="curency" id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="rub">RUB</option>
          <option value="eur">EURO</option>
        </select>
        <button onClick={openModal} className="watch-btn">WATCHLIST</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Watchlist</h2>
          <Watchlist/>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Navbar;
