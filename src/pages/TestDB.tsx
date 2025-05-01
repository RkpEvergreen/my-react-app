import { useEffect, useState } from 'react';

function TestDB() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/test-db')
      .then((res) => res.text())
      .then(setMsg)
      .catch((err) => setMsg("❌ Error: " + err.message));
  }, []);

  return <div>{msg}</div>;
}

export default TestDB;
