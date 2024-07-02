export const loadUsers = async () => {
  const res = await fetch(
    "https://602e7c2c4410730017c50b9d.mockapi.io/users/",
    {
      cache: "no-store", //data will not be cached
    }
  );
  const users = await res.json();

  return users;
};
