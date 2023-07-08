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
      <Project imgSrc='/images/airbnbscreenshot.png' alt = 'airbnb' projectName = 'Airbnb Rental Clone'
        techUsed = {['NextJS', 'MongoDB', 'Prisma', 'NextAuth', 'Zustand', 'TailwindCSS']}
        githubRepo = 'https://github.com/thomassbooth/airbnb-clone'/>
      <div className = 'w-full flex justify-end'>
      <Project className = 'mt-10' imgSrc='/images/airbnbscreenshot.png' alt = 'airbnb' projectName = 'Airbnb Clone - A functional property rental clone'
        techUsed = {['NextJS', 'MongoDB', 'Prisma', 'NextAuth', 'Zustand', 'TailwindCSS']}
        githubRepo = ''/>
      </div>
    </PageTransition>
  )
} 

export default ProjectsPage