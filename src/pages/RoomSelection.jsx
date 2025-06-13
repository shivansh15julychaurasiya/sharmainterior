import React, { useState, useEffect } from 'react';

const initialRooms = [
  { name: 'Living Room', count: 1 },
  { name: 'Kitchen', count: 1 },
  { name: 'Bedroom', count: 2 },
  { name: 'Bathroom', count: 2 },
  { name: 'Dining', count: 1 },
];

const RoomSelection = ({ onNext, onBack, onChange, selected = [] }) => {
  const [rooms, setRooms] = useState(selected.length ? selected : initialRooms);

  useEffect(() => {
    // Log current room selection anytime it changes
    console.log("Selected Rooms:", rooms);
  }, [rooms]);

  const handleIncrement = (index) => {
    const newRooms = [...rooms];
    newRooms[index].count++;
    setRooms(newRooms);
  };

  const handleDecrement = (index) => {
    const newRooms = [...rooms];
    if (newRooms[index].count > 0) {
      newRooms[index].count--;
      setRooms(newRooms);
    }
  };

  const handleNext = () => {
    onChange(rooms); //  Send rooms to parent
    onNext();         //  Move to next step
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Select the rooms you’d like us to design</h2>
      <p style={styles.infoText}>
        To know more about this, <a href="#" style={styles.link}>click here</a>
      </p>

      {rooms.map((room, index) => (
        <div key={index} style={styles.roomRow}>
          <span style={styles.roomName}>{room.name}</span>
          <div style={styles.counter}>
            <button onClick={() => handleDecrement(index)} style={styles.counterBtn}>−</button>
            <span style={styles.count}>{room.count}</span>
            <button onClick={() => handleIncrement(index)} style={styles.counterBtn}>＋</button>
          </div>
        </div>
      ))}

      <div style={styles.footer}>
        <button onClick={onBack} style={styles.backBtn}>BACK</button>
        <button onClick={handleNext} style={styles.nextBtn}>NEXT</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    background: '#fff',
    borderRadius: '12px',
    maxWidth: '700px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  infoText: {
    textAlign: 'center',
    fontSize: '14px',
    marginBottom: '2rem',
    color: '#555',
  },
  link: {
    color: '#fc5c65',
    textDecoration: 'none',
  },
  roomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    background: '#fdfdfd',
  },
  roomName: {
    fontSize: '16px',
    fontWeight: '500',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
  },
  counterBtn: {
    backgroundColor: '#fc5c65',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '0 10px',
  },
  count: {
    minWidth: '20px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  backBtn: {
    backgroundColor: '#f8d7da',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    color: '#d9534f',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  nextBtn: {
    backgroundColor: '#fc5c65',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '20px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default RoomSelection;
