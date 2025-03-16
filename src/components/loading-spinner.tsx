import { cva, VariantProps } from "class-variance-authority"

const spinnerVariants = cva(
  "border-4 rounded-full border-t-brand-700 animate-spin duration-700 border-brand-200",
  {
    variants: {
      size: {
        sm: "size-4 border-2",
        medium: "size-6 border-4",
        lg: "size-8 border-6",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
)
interface LoadingSpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

export const LoadingSpinner = ({ size, className }: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className={spinnerVariants({ size, className })}></div>
    </div>
  )
}
