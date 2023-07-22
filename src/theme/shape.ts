declare module '@mui/system' {
  interface Shape {
    borderRadiusSm: number | string;
    borderRadiusMd: number | string;
  }
}

const shape = {
  borderRadius: 1,
  borderRadiusSm: 6,
  borderRadiusMd: 8,
};

export default shape;
