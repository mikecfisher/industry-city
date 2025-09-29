"use client"

interface InfoCardProps {
  title: string
  badge?: string
  description?: string
  stats?: Array<{
    label: string
    value: string
  }>
  items?: Array<{
    label?: string
    value: string
    details?: string
  }>
  features?: string[]
  className?: string
}

export function InfoCard({ title, badge, description, stats, items, features, className = "" }: InfoCardProps) {
  return (
    <div className={`relative rounded-lg p-6 backdrop-blur-sm bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 border border-gray-800/50 shadow-xl hover:shadow-2xl hover:border-gray-700/50 transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Subtle inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-800/5 to-gray-700/10 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-space-grotesk font-medium text-white">{title}</h3>
          {badge && (
            <span className="text-xs font-mono text-gray-300 bg-gray-950/80 border border-gray-800/50 px-2 py-1 rounded">{badge}</span>
          )}
        </div>

        {description && (
          <p className="text-sm font-inter text-gray-400 mb-4">{description}</p>
        )}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-sm font-inter text-gray-400 mb-1">{stat.label}</div>
                <div className="text-lg font-space-grotesk text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        )}

        {items && items.length > 0 && (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-border/10 last:border-b-0"
              >
                {item.label && (
                  <span className="text-sm font-inter text-gray-300">{item.label}</span>
                )}
                <span className="text-lg font-space-grotesk text-white">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {features && features.length > 0 && (
          <div>
            <div className="text-sm font-inter text-gray-400 mb-2">Features</div>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-sm font-inter text-gray-300 flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
