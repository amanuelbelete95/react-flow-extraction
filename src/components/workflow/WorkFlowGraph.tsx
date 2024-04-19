import React, { useState } from 'react';
import Styles from './WorkFlowGraph.module.css';

import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';

import { Node } from 'reactflow';

import { initialEdges, initialNodes } from '../../type/type';
import Button from './Button';

const WorkFlowGraph: React.FC = function () {
  // function to extract the exact menu;
  const [text, setText] = useState('');
  const [extractedMenuItems, setExtractedMenuItems] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

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

  // add nodes;
  const addNode = () => {
    const newNode = {
      id: (Math.random() * 10000).toString(),
      type: 'default',
      data: { label: 'New Node' },
      position: { x: 0, y: 0 },
    };
    setElements((prevElements) => [...prevElements, newNode]);
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

        {/* <div>

        <button onClick={addNode} className={styles.button}>
              Add Node
          <button className={Styles.button}>Add Node</button>
          <button className={Styles.button}>Delete Node</button>
          <button className={Styles.button}>Duplicate Node</button>
        </div> */}

        <Button
          text='Add Node'
          handleClick={addNode}
        />

        {/* <Button
          text='Delete Node'
          handleClick={deleteNode}
        />

        <Button
          text='Duplicate Node'
          handleClick={duplicateNode}
        /> */}

        <div className={Styles.centerPanel}>
          <ReactFlow
            nodes={elements}
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
