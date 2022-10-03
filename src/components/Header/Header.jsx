import './Header.css'
import React from "react";
import Button from "../Button/Button";
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
  const { onClose, onToggleButton, user } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <Button onClick={onToggleButton}>toggle</Button>
      <span className="username">{user?.username}</span>
    </div>
  );
};

export default Header;
