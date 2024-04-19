import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import { Node } from '../../type/type';

interface WorkFlowGraphProps {
  nodes: Node[];
}

const WorkFlowGraph: React.FC<WorkFlowGraphProps> = function ({ nodes }) {
  return (
    <ReactFlowProvider>
      <div>
        <ReactFlow nodes={nodes} />
      </div>
    </ReactFlowProvider>
  );
};

export default WorkFlowGraph;
