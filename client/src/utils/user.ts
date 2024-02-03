export const getUser = async () => {
  const data = await localStorage.getItem("appUser");
  if (data) {
    const user = await JSON.parse(data);
    return user;
  }
  return null;
};

export const saveUser = async (data) => {
  const uData = await JSON.stringify(data);
  await localStorage.setItem("appUser", uData);
  return;
};
