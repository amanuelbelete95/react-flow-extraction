import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

// import { Node } from 'reactflow';
import { Node } from '../../type/type';

const elements: Node[] = [
  {
    id: '1',

    data: {
      label: 'Node 1',
    },

    position: {
      x: 100,
      y: 100,
    },
  },

  {
    id: '2',

    data: {
      label: 'Node 2',
    },

    position: {
      x: 200,
      y: 200,
    },
  },
];

const WorkFlowGraph: React.FC = function () {
  const flowStyle = { height: '500px', width: '500px' };
  return (
    <ReactFlowProvider>
      <div style={flowStyle}>
        <ReactFlow nodes={elements} />
      </div>
    </ReactFlowProvider>
  );
};

export default WorkFlowGraph;
