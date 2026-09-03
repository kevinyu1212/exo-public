'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/stores/auth-store';

export default function AuthInitializer() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  return null;
}
