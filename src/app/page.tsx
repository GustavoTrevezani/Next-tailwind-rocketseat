export default async function Home() {
  
  const responde = await fetch('https://api.github.com/users/GustavoTrevezani', {
    next: {
      revalidate: 60,
    },
  });
  const data = await responde.json();
  

  return (
    <pre>Hello World!
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
