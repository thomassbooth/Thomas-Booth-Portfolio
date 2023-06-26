'use client'

interface jobItemProps {
    id: number
    company: string
    title: string
    date: string
    action: (index: number) => void
}

const JobItem: React.FC<jobItemProps> = ({id, company, title, date, action}) => {
  return (
    <div className = 'flex bg-pastel-brown-light/20 p-2 w-32 justify-center' onClick = {() => {action(id)}}>
      <h3>{company}</h3>
    </div>
  )
}

export default JobItem