import Link from "next/link"
import PageTransition from "../../components/PageTransition"
import Title from "../../components/Title"

export const metadata = {
  title: 'Projects - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

const ProjectsPage = () => {
  return (
    <PageTransition width = 'w-4/5'>
      <Title title = 'Projects' pageNo = {'03'} slideDirection = {'down'}/>
      <Link href = '/projects/dave'>DAVE PROJECT</Link>
    </PageTransition>
  )
} 

export default ProjectsPage