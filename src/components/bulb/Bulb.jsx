import React, { useState, useEffect, useCallback } from 'react';
import {useBlubs} from './useBulb'

// React component using the custom hook
const BlubsComponent = ({ env }) => {
  const { blubs, easyCreate, fetchBlubsByPosition } = useBlubs(env);
  const [newBlubTitle, setNewBlubTitle] = useState('');
  const [newBlubDescription, setNewBlubDescription] = useState('');

  const handleCreateBlub = () => {
    easyCreate(newBlubTitle, newBlubDescription);
    setNewBlubTitle('');
    setNewBlubDescription('');
  };

  return (
    <div>
      <h1>Blubs</h1>
      <div>
        <input
          type="text"
          value={newBlubTitle}
          onChange={(e) => setNewBlubTitle(e.target.value)}
          placeholder="Blub Title"
        />
        <input
          type="text"
          value={newBlubDescription}
          onChange={(e) => setNewBlubDescription(e.target.value)}
          placeholder="Blub Description"
        />
        <button onClick={handleCreateBlub}>Create Blub</button>
      </div>
      {/* You can add more UI elements here to display and interact with blubs */}
    </div>
  );
};

export default BlubsComponent;