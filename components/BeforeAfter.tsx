'use client';

import Image from 'next/image';

type Props = {
  before: string;
  after: string;
  alt: string;
  showAfter: boolean;
};

export default function BeforeAfter({ before, after, alt, showAfter }: Props) {
  return (
    <div
      className={`ba-card ${showAfter ? 'is-active' : ''}`}
      role="group"
      aria-label={`До и после: ${alt}`}
    >
      <Image
        src={before}
        alt={`${alt} — до`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="ba-before"
      />
      <Image
        src={after}
        alt={`${alt} — после`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="ba-after"
      />
    </div>
  );
}
