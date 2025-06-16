'use client';
import { useRef, useEffect } from 'react';

const usePortal = (id: string, classes: string, size: string): HTMLElement => {
  const rootElemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const existingParent = document.querySelector<HTMLElement>(`#${id}`);
    const parentElem = existingParent || createRootElement(id, classes);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    document.body.style.overflow = 'hidden'; // Disable scrolling

    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling on cleanup
      rootElemRef.current?.remove();
      if (parentElem.childNodes.length === 0) {
        parentElem.remove();
      }
    };
  }, [id, classes, size]);

  const createRootElement = (id: string, classes: string): HTMLElement => {
    const rootContainer = document.createElement('div');
    rootContainer.id = id;
    rootContainer.className = classes;
    return rootContainer;
  };

  const addRootElement = (rootElem: HTMLElement) => {
    document.body.appendChild(rootElem);
  };

  const getRootElem = (): HTMLElement => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
      rootElemRef.current.className = size;
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

export default usePortal;
