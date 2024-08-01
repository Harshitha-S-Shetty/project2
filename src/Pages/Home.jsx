import React from 'react';

function Home() {
  return (
    <div 
      style={{
        backgroundImage: "url('https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2023/04/14124110/Top-10-Job-Portals-in-India-That-Makes-Them-Good-min.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '590px',
        '@media (max-width: 768px)': {
          height: '400px',
        }
      }}
    >
    </div>
  );
}

export default Home;
