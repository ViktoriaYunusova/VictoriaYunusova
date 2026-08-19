'use client';

import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    document.documentElement.style.cursor = 'auto';
    return () => {
      document.documentElement.style.cursor = '';
    };
  }, []);

  return null;
}
