const genScale = (domain: [number, number], range: [number, number]) => {
  const d0 = domain[0];
  const d1 = domain[1];
  const r0 = range[0];
  const r1 = range[1];

  return (value: number) =>
    r0 * (1 - (value - d0) / (d1 - d0)) + r1 * ((value - d0) / (d1 - d0));
};

export default genScale;
