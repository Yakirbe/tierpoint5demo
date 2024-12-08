import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = "tier.5";
  }, []);

  return (
    <div>
      {/* Your component code here */}
    </div>
  );
};

export default App; 