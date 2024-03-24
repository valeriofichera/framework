import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation

const RedirectPage = () => {
  const router = useRouter(); // Use functional useRouter hook
  const index = router.query?.index || null; // Optional chaining
  const [jsonData, setJsonData] = useState('');

  useEffect(() => {
    const myArray = JSON.parse(localStorage.getItem('formEntries')) || [];
    if (index !== undefined && myArray[parseInt(index)]) {
      const data = { id: parseInt(index), content: myArray[parseInt(index)] };
      setJsonData(JSON.stringify(data, null, 2));
    } else {
      const data = { error: "Content not found" };
      setJsonData(JSON.stringify(data, null, 2));
    }
  }, [index]);

  return <pre>{jsonData}</pre>;
};

export default RedirectPage;
