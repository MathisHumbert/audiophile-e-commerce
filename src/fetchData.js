export const fetchData = async () => {
  const response = await fetch('http://localhost:3000/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
};
