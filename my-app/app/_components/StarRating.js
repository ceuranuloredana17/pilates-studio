'use client'

import { useState } from 'react'

export default function StarRating({ value, onChange, label }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      {label && <span className="text-gray-700 font-medium">{label}</span>}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="text-3xl leading-none transition-transform hover:scale-110 focus:outline-none"
            aria-label={`${star} ${star === 1 ? 'stea' : 'stele'}`}
          >
            <span className={hovered >= star || value >= star ? 'text-amber-400' : 'text-gray-200'}>
              ★
            </span>
          </button>
        ))}
        {value > 0 && (
          <span className="ml-2 self-center text-sm text-gray-500">
            {value === 1 && 'Nesatisfăcător'}
            {value === 2 && 'Acceptabil'}
            {value === 3 && 'Bun'}
            {value === 4 && 'Foarte bun'}
            {value === 5 && 'Excelent'}
          </span>
        )}
      </div>
    </div>
  )
}
