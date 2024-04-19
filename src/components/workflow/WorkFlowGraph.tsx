import React, { useState } from 'react';
import Styles from './WorkFlowGraph.module.css';

import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
} from 'react-flow-renderer';

import { Node } from 'reactflow';

import { initialEdges, initialNodes } from '../../type/type';
import Button from './Button';

const WorkFlowGraph: React.FC = function () {
  // function to extract the exact menu;
  const [text, setText] = useState('');
  const [extractedMenuItems, setExtractedMenuItems] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [elements, setElements] = useState<Node[]>([]);

  //
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

  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id);
  };

  const addNode = () => {
    const newNode = {
      id: (Math.random() * 50).toString(),
      data: { label: `Node ${Math.round(Math.random() * 11)}` },
      position: { x: Math.random() * 200, y: Math.random() * 200 },
    };
    setElements((prevElements) => [...prevElements, newNode]);
  };

  const deleteNode = (nodeId: any) => {
    setElements((prevElements) =>
      prevElements.filter((el) => el.id !== nodeId)
    );

    setSelectedNode(null);
  };

  const handleNodeDelete = () => {
    if (selectedNode) {
      deleteNode(selectedNode);
    }
  };

  const duplicateNode = () => {
    if (selectedNode) {
      const duplicatedNode: Node = {
        id: (Math.random() * 50).toString(),
        data: { label: 'duplicate' },
        position: { x: Math.random() * 200, y: Math.random() * 200 },
      };
      setElements((prevElements) => [...prevElements, duplicatedNode]);
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

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            text='Add Node'
            handleClick={addNode}
          />

          <Button
            text='delete Node'
            handleClick={handleNodeDelete}
          />

          <Button
            text='Duplicate Node'
            handleClick={duplicateNode}
          />
        </div>

        <div className={Styles.centerPanel}>
          <ReactFlow
            nodes={elements && elements.length === 0 ? initialNodes : elements}
            edges={initialEdges}
            fitView
            onNodeClick={onNodeClick}>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </main>
    </ReactFlowProvider>
  );
};

export default WorkFlowGraph;
