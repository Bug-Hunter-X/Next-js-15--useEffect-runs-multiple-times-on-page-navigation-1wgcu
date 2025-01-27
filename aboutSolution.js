```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (router.pathname === '/about') {
      console.log('About page mounted');
      let interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () => {
        console.log('About page unmounted');
        clearInterval(interval);
      };
    }
  }, [router.pathname]);

  return (
    <div>
      <h1>About Page</h1>
      <p>Component rendered {count} times.</p>
    </div>
  );
}
```