function isCanvasSupported() {
  const canvas = document.createElement('canvas');
  return !!(canvas.getContext && canvas.getContext('2d'));
}
export default isCanvasSupported;
