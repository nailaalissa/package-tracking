import { useState } from 'react';
import './header.css';

export default function Header() {
  const [showModel, setshowModel] = useState(false);

  return (
    <header className="flex" id="up">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#up">Home</a>
          </li>

          <li>
            <a href="#packet">Packet tracking</a>
          </li>

          <li>
            <a href="#contact">Contact us </a>
          </li>
        </ul>
      </nav>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>Home</li>

            <li>Packet tracking</li>
            <li>Contact us</li>
          </ul>
        </div>
      )}
    </header>
  );
}
