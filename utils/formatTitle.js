export const formatTitle = (title) => {
  if (!title) return "";
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};
