import * as React from "react"
import { cn } from "@/lib/utils"

type InputProps = React.ComponentProps<"input"> & {
  iconLeft?: React.ElementType | null
  iconRight?: React.ElementType | null
}

function Input({
  className,
  type,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...props
}: InputProps) {
  const hasIconLeft = !!IconLeft
  const hasIconRight = !!IconRight

  return (
    <div className="relative">
      {hasIconLeft && IconLeft && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <IconLeft className="h-4 w-4" />
        </span>
      )}

      {hasIconRight && IconRight && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <IconRight className="h-4 w-4" />
        </span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          hasIconLeft && hasIconRight
            ? "pl-9 pr-9"
            : hasIconLeft
            ? "pl-9 pr-3"
            : hasIconRight
            ? "pl-3 pr-9"
            : "px-3",
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
