export interface Node {
  id: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
}
