import React from 'react';
import Nav from './Nav';

const Home = () => {
  return (
    
    <div
      style={{
        backgroundImage: `url('temple.jpeg')`, // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Align items to the top
        alignItems: 'center',
        color: 'white',
        paddingTop: '20px', // Add some padding to ensure text isn't too close to the top
      }}
    >
       
        

      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '20px',
        textAlign: 'center' // Aligns text within the heading element
      }}>
        Thillenkery Siva Temple Online Services
       
      </h1>
      <Nav/>
      <div className="row">
        <div className="col col-12">
          {/* Additional content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Home;

