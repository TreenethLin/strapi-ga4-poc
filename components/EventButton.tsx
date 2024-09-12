'use client';

import { Button } from '@/components/ui/button';
import { sendGAEvent } from '@next/third-parties/google';
import { MouseEvent } from 'react';

export function EventButton() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendGAEvent({ event: 'buttonClicked', value: 'xyz' });
  };

  return (
    <div>
      <Button onClick={handleClick} variant="default">
        Send Event
      </Button>
    </div>
  );
}
