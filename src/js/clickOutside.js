/** Dispatch event on click outside of node */
export const clickOutside = node => {
  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      event.stopPropagation();
      node.dispatchEvent(new CustomEvent('clickedOutside', node));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
};
