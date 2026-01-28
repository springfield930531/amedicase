import React from 'react';
import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Amedicase Logo"
      width={161}
      height={37}
      className={className}
      priority
    />
  );
}
