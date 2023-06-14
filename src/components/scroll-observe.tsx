import { useEffect, useRef } from "react"
import "./index.css"
const thresholdArray = () => {
  const threshold = []
  for (let i=0; i<=1; i += 0.01) threshold.push(i)
  return threshold
}

interface Props {
  id: string
  update: React.Dispatch<React.SetStateAction<any>>
  children: React.ReactNode
}
export const EachDiv:React.FC<Props> = ({ id, update, children }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        update((prev:any) => ({
          ...prev,
          [entry.target.id]: String(entry.isIntersecting)
        }))
      })
    },
                                              {
        threshold: .2
      })
    
    observer.observe(ref.current as any)
    
    return () => observer.unobserve(ref.current as any)
  }, [])
  
  return <div id={id} ref={ref}>{children}</div>
}