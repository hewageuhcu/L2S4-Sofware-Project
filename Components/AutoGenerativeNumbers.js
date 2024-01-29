import React from 'react';

const NumberList = () => {
  // Array to hold numbers
  const numbers = [];

  // Use a for loop to generate numbers from 1 to 10
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  // Render the list of numbers
  return (
    <div>
     
      
     <ul style={{ listStyle: 'none' }}>
  {numbers.map((number) => (
    <li key={number}>{number}</li>
  ))}
</ul>

    </div>
  );
};

export default NumberList;
