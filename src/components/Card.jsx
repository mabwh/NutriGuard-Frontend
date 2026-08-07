// src/components/ui/Card.jsx
export default function Card({
  children,
  variant,
  icon,
  label,
  content,
  insight,
  className = "",
  hover = false,
  padding = "p-6",
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`
        rounded-xl
        bg-base-100
        shadow
        ${padding}
        ${hover ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" : ""}
        ${className}
      `}
      {...props}
    >
      { variant == 'HealthStat' ? 
      <div className='flex flex-col gap-1'>
        <div className=''>{icon}</div>
        <div className='text-caption'>{label}</div>
        <div className='font-semibold'>{content}</div>
      </div>
      : variant == 'Statistic' ? 
      <div className="flex flex-col gap-1">
        <div className='w-fit h-fit border p-3 rounded-full'>{icon}</div>
          <div className='text-caption'>{label}</div>
          <div className='font-semibold'>{content}</div>
          <div className='text-caption'>{insight}</div>
      </div>
      : children }
    </Component>
  );
}