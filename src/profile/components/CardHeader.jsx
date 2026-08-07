import React from 'react'

export default function CardHeader({icon, headline, badgeMsg, badgeType}) {
  return (
    <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
                {icon}
            </span>

            <h3 className="font-headline-sm text-headline-sm text-text-primary">
                {headline}
            </h3>
        </div>

        <span className={`text-${badgeType} bg-${badgeType}/10 px-3 py-1 rounded-full text-caption font-bold`}>
            {badgeMsg}
        </span>
    </div>
  )
}
