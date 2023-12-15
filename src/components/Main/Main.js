import React, { useState } from 'react';
import './main.css';
import { orders } from '../orders.json';

export default function Main() {
  const [currentActive, setcurrentActive] = useState('all');
  const [arr, setArr] = useState(orders);
  const clickHandel = (buttonCategory) => {
    const newArr = orders.filter((item) => {
      return item.status.includes(buttonCategory);
    });

    setArr(newArr);
  };

  return (
    <main className="flex" id="packet">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive('all');
            setArr(orders);
          }}
          className={currentActive === 'all' ? 'active' : null}
        >
          All Orders
        </button>
        <button
          onClick={() => {
            clickHandel('on-the-way');
          }}
          className={currentActive === 'on-the-way' ? 'active' : null}
        >
          On The way
        </button>
        <button
          onClick={() => {
            clickHandel('java');
          }}
          className={currentActive === '"delivered"' ? 'active' : null}
        >
          delivered
        </button>
        <button
          onClick={() => {
            clickHandel('react');
          }}
          className={currentActive === 'ready-for-pickup' ? 'active' : null}
        >
          ready for pickup
        </button>
        <button
          onClick={() => {
            clickHandel('c');
          }}
          className={currentActive === 'order-info-received' ? 'active' : null}
        >
          order info received
        </button>
      </section>

      <section className="right-section flex">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <div>
                <h3>Order #{orders.parcel_id}</h3>
                <p>Status: {orders.status}</p>
                <p>ETA: {orders.eta}</p>
                <p>Pickup Location: {orders.location_name}</p>
                {/* Add more details as needed */}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
