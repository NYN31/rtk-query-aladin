const getShortFormText = (description, maxLength = 20) => {
  description = description.trim();
  if (
    description === null ||
    description === undefined ||
    description.length === 0
  ) {
    return '';
  }

  let shortText = description.slice(0, maxLength);
  if (description.length > maxLength) shortText += '...';
  return shortText;
};
export default getShortFormText;
