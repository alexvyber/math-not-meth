import stylex, { StyleXStyles } from "@stylexjs/stylex"

type Props = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "gray" | "violet"
  buttonWidth?: number
}

export default function Button({ children, variant = "gray", buttonWidth = 30, ...props }: Props) {
  const width = styles.width(`${buttonWidth}px`)
  const base = styles.base
  const variant_ = styles[variant]

  console.log({ width, base, variant_ })

  return (
    <button
      {...props}
      {...stylex.props(styles.opacity("10%"), styles.width(`${buttonWidth}px`), styles.base, styles[variant])}
    >
      {children}
    </button>
  )
}

const styles = stylex.create({
  base: {
    padding: "8px 20px",
    borderRadius: "30px",
    height: "100%",
  },
  violet: {
    backgroundColor: {
      default: "blueviolet",
      ":hover": "darkviolet",
    },
    color: "white",
  },
  gray: {
    backgroundColor: {
      default: "gray",
      ":hover": "red",
    },
  },
  width: (width: string) => ({ width }),
  opacity: (opacity: string) => ({ opacity }),
})

styles.gray.backgroundColor
