import React from 'react';
import "./styles.css";
import useDragAndDrop from '../hooks/useDragDrop';
const initialDivContent = ["Div 1", "Div 2", "Div 3", "Div 4", "Div 5", "Div 6", "Div 7", "Div 8"];
const GridComponent: React.FC = () => {
 const {handleDragEnd,handleDragOver,handleDragStart,handleDrop,data , draggedItem} = useDragAndDrop(initialDivContent)
  
  return (
    <div className="container mx-auto mt-5 bg-gray-300 p-10 rounded-xl shadow-xl">
      <div className="grid grid-cols-4 gap-7">
        {data.map((divContent, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-4 rounded-xl shadow-xl ${draggedItem === index ? 'dragged' : ''}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
          >
            {divContent}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridComponent;