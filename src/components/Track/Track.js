import React, { useState, useEffect } from 'react';
import ordersData from '../orders.json';
import './track.css';
import paket from '../animation/paket.json';
import Lottie from 'lottie-react';

const Track = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchField, setSearchField] = useState('id');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null); // New state for selected order

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAllOrders(ordersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();

    if (term.trim() !== '') {
      const filtered = allOrders.filter((order) => {
        const fieldValue = order[searchField].toString().toLowerCase();

        return searchField === 'status' || searchField === 'id'
          ? fieldValue === term
          : fieldValue.includes(term);
      });

      setFilteredOrders(filtered);
    } else {
      setFilteredOrders([]);
    }
  };

  const handleShowAll = () => {
    setFilteredOrders(allOrders);
  };

  const handleSelectOrder = (selectedOrder) => {
    setSelectedOrder(selectedOrder); // Update the selectedOrder state
  };

  return (
    <div>
      <div className="animationpaket">
        <Lottie className="contactanimation" style={{ height: 300 }} animationData={paket} />
      </div>
      <h1> Tracking App</h1>

      <div className="search position">
        <label className="box" htmlFor="searchField">
          Search by:
        </label>
        <select
          className="box"
          id="searchField"
          onChange={(e) => setSearchField(e.target.value)}
          value={searchField}
        >
          <option className="box" value="id">
            Order ID
          </option>
          <option value="status">Status</option>
          <option value="location_name">Location Name</option>
        </select>
        <input
          className="box"
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleShowAll}>Show All</button>
      </div>

      {selectedOrder ? ( // Check if a specific order is selected
        <div>
          <h2>Order Details</h2>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Status: {selectedOrder.status}</p>
          <p>ETA: {selectedOrder.eta}</p>
          <p>Pickup Location: {selectedOrder.location_name}</p>
          {/* Additional details can be displayed here */}
          <button onClick={() => setSelectedOrder(null)}>Close</button>
        </div>
      ) : filteredOrders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>ETA</th>
              <th>Pickup Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.eta}</td>
                <td>{order.location_name}</td>
                <td>
                  <button onClick={() => handleSelectOrder(order)}>More Info</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results to display. Please search or click "Show All".</p>
      )}
    </div>
  );
};

export default Track;
