interface WeekGridProps {
    totalWeeks: number
    spentWeeks: number
  }
  
  export function WeekGrid({ totalWeeks, spentWeeks }: WeekGridProps) {
    return (
      <div className="grid grid-cols-52 gap-0.5 w-full p-4">
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <div
            key={index}
            className={`aspect-square w-2 ${
              index < spentWeeks ? 'bg-primary/30' : 'bg-primary'
            } rounded-sm`}
          />
        ))}
      </div>
    )
  }
  
  