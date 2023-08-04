export const toastMessageObject = (
  title,
  description,
  status,
  duration = 5000,
  isClosable = true
) => {
  return {
    title,
    description,
    status,
    duration,
    isClosable,
  };
};
