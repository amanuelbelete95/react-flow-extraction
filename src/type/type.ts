export interface Node {
  id: string;
  type: string;
  data: {
    label: string;
    // Additional data properties specific to your application
  };
  position: {
    x: number;
    y: number;
  };
}
