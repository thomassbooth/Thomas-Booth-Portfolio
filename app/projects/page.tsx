import Link from "next/link"
import PageTransition from "../../components/PageTransition"
import Title from "../../components/Title"
import Image from "next/image"

export const metadata = {
  title: 'Projects - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

const ProjectsPage = () => {
  return (
    <PageTransition width = 'w-4/5'>
      <Title title = 'Projects' pageNo = {'03'} slideDirection = {'down'}/>
      <Link href = '/projects/dave'>DAVE PROJECT</Link>
      <Image 
        className = 'border-2 rounded-lg'
        src = '/images/airbnb.jpeg' 
        alt = 'airbnb' 
        width = {500} 
        height = {500}/>
    </PageTransition>
  )
} 

export default ProjectsPage