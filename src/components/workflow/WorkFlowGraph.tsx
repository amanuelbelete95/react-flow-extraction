import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';

import { initialEdges, initialNodes } from '../../type/type';

const WorkFlowGraph: React.FC = function () {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlowProvider>
      <div style={{ height: '500px', width: '500px' }}>
        <ReactFlow
          nodes={initialNodes}
          onNodesChange={onNodesChange}
          edges={initialEdges}
          onEdgesChange={onEdgesChange}
          fitView>
          <Background />

          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default WorkFlowGraph;
