const EmailDecoder = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken && accessToken.split('.').length > 1) {
    return JSON.parse(atob(accessToken.split('.')[1])).sub;
  } else return false;
};

export default EmailDecoder;
