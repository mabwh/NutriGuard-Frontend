// src/components/ui/Card.jsx
export default function Card({
  children,
  variant,
  icon,
  label,
  content,
  insight,
  insightType,
  className = "",
  hover = false,
  padding = "p-6",
  as: Component = "div",
  ...props
}) {

  const bgMap = {
  success: 'bg-green-500/10',
  info: 'bg-blue-500/10',
  warning: 'bg-yellow-500/10'
};

  return (
    <Component
      className={
        `${(variant == 'HealthStat' || variant == 'Statistic') ? "bg-background" : "bg-surface"}
        rounded-lg
        h-full
        p-6
        border
        border-border
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        ${padding}
        ${hover ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" : ""}
        ${className}
      `}
      {...props}
    >
      { variant == 'HealthStat' ? 
      <div className='flex flex-col gap-1'>
        <div className='text-2xl text-primary mb-1 '>{icon}</div>
        <div className='text-sm font-caption text-text-secondary'>{label}</div>
        <div className='text-headline-sm font-headline-sm'>{content}</div>
      </div>
      
      : variant == 'Statistic' ? 
      <div className="flex flex-col gap-1">
        <div className={`w-12 h-12 text-2xl text-${insightType} ${bgMap[insightType]} rounded-full flex items-center mb-0.5 justify-center`}>{icon}</div>
          <div className='text-caption font-caption text-text-secondary mb-0.5'>{label}</div>
          <div className='text-headline-md font-headline-md text-text-primary'>{content}</div>
          <div className={`text-caption font-caption text-${insightType} flex flex-row gap-1`}>{insight}</div>
      </div>
      : children }
    </Component>
  );
}