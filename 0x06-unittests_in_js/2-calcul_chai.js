function calculateNumber(type, a, b) {
  const ra = Math.round(a);
  const rb = Math.round(b);
  let result;

  switch (type) {
    case 'SUM':
      result = ra + rb;
      break;
    case 'SUBTRACT':
      result = ra - rb;
      break;
    case 'DIVIDE':
      if (rb === 0) {
        result = 'Error';
      } else {
        result = ra / rb;
      }
      break;
  }
  return result;
}

export default calculateNumber;
