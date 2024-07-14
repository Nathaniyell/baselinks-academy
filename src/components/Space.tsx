import clsx from "clsx"
type spaceProps={
    border?: string
}
const Space = ({border}:spaceProps) => {
  return (
    <div className={clsx(`h-[1rem] w-full`, border)}></div>
  )
}

export default Space