import { useState } from "react";

const useDragAndDrop = <T extends unknown>(initialData: T[]) => {
  const [data, setData] = useState<T[]>(initialData);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    console.log("Drag start.........")
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DragOver.........")
    e.preventDefault();
  };

  const handleDrop = (index: number) => {
    console.log("Drop.........")
    if (draggedItem !== null) {
      const draggedIndex = draggedItem;
      const updatedData = [...data];
      const draggedItemContent = updatedData[draggedIndex];
      updatedData[draggedIndex] = data[index];
      updatedData[index] = draggedItemContent;
      setData(updatedData);
      setDraggedItem(null);
    }
  };

  const handleDragEnd = () => {
    console.log("Drag End.........")
    const container = document.querySelector(".container");
    const draggedElement = document.querySelector(".dragged");
    if (
      draggedItem !== null &&
      container &&
      draggedElement &&
      !container.contains(draggedElement)
    ) {
      setData(initialData);
    }
    setDraggedItem(null);
  };

  return {
    data,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    draggedItem,
  };
};

export default useDragAndDrop;
