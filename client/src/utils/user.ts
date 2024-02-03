export const getUser = () => {
  const data = localStorage.getItem("appUser");
  if (data) {
    const user = JSON.parse(data);
    return user;
  }
  return null;
};

export const saveUser = (data) => {
  const uData = JSON.stringify(data);
  return localStorage.setItem("appUser", uData);
};
