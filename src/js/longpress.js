const MOVE_TOLERANCE = 50;

export function longpress(node, duration = 400) {
  let timer;
  let startPosition;

  const handleMouseup = () => {
    clearTimeout(timer);
  };

  const handleMouseMove = event => {
    let position = { x: event.clientX, y: event.clientY };
    let dx = position.x - startPosition.x;
    let dy = position.y - startPosition.y;
    let distSqr = dx * dx + dy * dy;

    if (distSqr > MOVE_TOLERANCE) {
      clearTimeout(timer);
    }
  };

  const handleMousedown = event => {
    startPosition = { x: event.clientX, y: event.clientY };

    timer = setTimeout(() => {
      console.log('LONGPRESS', node, event);
      node.dispatchEvent(
        new CustomEvent('longpress', {
          detail: {
            startDragPosition: { x: event.clientX, y: event.clientY },
          },
        })
      );
    }, duration);

    node.addEventListener('mouseup', handleMouseup);
    node.addEventListener('mousemove', handleMouseMove);
  };

  node.addEventListener('mousedown', handleMousedown);

  return {
    update(newDuration) {
      duration = newDuration;
    },
    destroy() {
      node.removeEventListener('mousedown', handleMousedown);
      node.removeEventListener('mouseup', handleMouseup);
      node.removeEventListener('mousemove', handleMouseMove);
    },
  };
}
