
export const setToken = (token) => {
  localStorage.setItem("token", token);
};


export const getToken = () => {
  return localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
};

export const clearToken = () => {
  localStorage.removeItem("token");
};
