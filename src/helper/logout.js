const logout = () => {
  localStorage.removeItem('auth');
};

export default logout;
