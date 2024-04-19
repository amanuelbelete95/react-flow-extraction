import { Node, Edge } from 'reactflow';

const initialEdges: Edge[] = [
  {
    id: '1-2',
    source: '1',
    target: '2',
  },
];

const initialNodes: Node[] = [
  {
    id: '1',
    position: {
      x: 10,
      y: 10,
    },

    data: { label: 'Node 1' },
  },

  {
    id: '2',
    position: {
      x: 100,
      y: 100,
    },

    data: { label: 'Node 2' },
  },
];

export { initialNodes, initialEdges };
