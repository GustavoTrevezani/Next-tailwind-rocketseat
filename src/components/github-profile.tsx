export default async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const responde = await fetch(
    "https://api.github.com/users/GustavoTrevezani",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await responde.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
