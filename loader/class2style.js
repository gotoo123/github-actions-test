module.exports = (jsx) => {
  return jsx.replace(/className=/g, 'styleName=');
};
