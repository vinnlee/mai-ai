import React from 'react';

import PageTitle from './components/PageTitle';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <PageTitle title="MAI AI" />
      <div className="">
        {/* sidebar */}

        <div className="">
          {/* Nav bar */}
          <NavBar />

          {/* Response area area */}
          <div className="">
            <div className=""></div>
          </div>

          {/* Chat area */}
          <div>
            <p>Mai is AI and she can make mistakes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
