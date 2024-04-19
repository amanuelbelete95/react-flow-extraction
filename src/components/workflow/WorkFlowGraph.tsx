import React, { useState } from 'react';
import Styles from './WorkFlowGraph.module.css';

import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';

import { initialEdges, initialNodes } from '../../type/type';

const WorkFlowGraph: React.FC = function () {
  // function to extract the exact menu;
  const [text, setText] = useState('');
  const [extractedMenuItems, setExtractedMenuItems] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const extractMenuItems = () => {
    const regex = /^\d+\.\s.+/gm;
    const matches = text.match(regex);

    if (matches) {
      setExtractedMenuItems(matches);
      setError(false);
      setText('');
    } else {
      setExtractedMenuItems([]);
      setError(true);
    }
  };

  return (
    <ReactFlowProvider>
      <main className={Styles.container}>
        <div className={Styles.leftPanel}>
          <div style={{ flex: '0 0 30%', padding: '10px' }}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: '100%', height: '200px' }}></textarea>
            <button
              onClick={extractMenuItems}
              className={Styles.button}>
              Extract
            </button>
          </div>

          <div>
            {error && (
              <div className={Styles.error}>No valid menu items found</div>
            )}
            {extractedMenuItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>

        <div className={Styles.centerPanel}>
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </main>
    </ReactFlowProvider>
  );
};

export default WorkFlowGraph;
