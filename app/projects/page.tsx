import Link from "next/link"
import PageTransition from "../../components/PageTransition"
import Title from "../../components/Title"
import Image from "next/image"
import Project from "@/components/projects/Project"

export const metadata = {
  title: 'Projects - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

const ProjectsPage = () => {
  return (
    <PageTransition width = 'w-4/5'>
      <Title title = 'Projects' pageNo = {'03'} slideDirection = {'down'}/>
      <Project imgSrc='/images/airbnbscreenshot.png' alt = 'airbnb' projectName = 'Airbnb Clone - A functional property rental clone'
        techUsed = {['NextJS', 'Vercel', 'MongoDB', 'Prisma', 'NextAuth', 'Zustand']}/>
      
    </PageTransition>
  )
} 

export default ProjectsPage