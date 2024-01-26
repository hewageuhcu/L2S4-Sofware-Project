// Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowMinimize, faWindowMaximize, faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div>
      <div className="head">
      <div className="window-actions">
        <button className="minimize">
          <FontAwesomeIcon icon={faWindowMinimize} />
        </button>
        <button className="maximize">
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
        <button className="close">
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </div>
      </div>
    </div>
  );
}