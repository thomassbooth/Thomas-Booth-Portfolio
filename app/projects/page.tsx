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
      <Project className = 'mt-20' imgSrc='/images/nunigramscreenshot.jpeg' alt = 'Nunigram' projectName = 'Instagram Frontend Clone'
        techUsed = {['ReactJS', 'Redux', 'Framer Motion', 'Auth0', 'TailwindCSS']}
        githubRepo = 'https://github.com/thomassbooth/nunigram-frontend'
        hosted = 'https://nunigram.netlify.app/'
        />
      <div className = 'w-full flex justify-end'>
        <Project className = 'mt-40' imgSrc='/images/airbnbscreenshot.png' alt = 'airbnb' projectName = 'Airbnb Rental Clone'
          techUsed = {['NextJS', 'MongoDB', 'Prisma', 'OAuth', 'NextAuth', 'Zustand', 'TailwindCSS']}
          githubRepo = 'https://github.com/thomassbooth/airbnb-clone'
          hosted = 'https://thomasbooth-properties-rental.vercel.app/'/>
      </div>
      <Project className = 'mt-40' imgSrc='/images/nunigramscreenshot.jpeg' alt = 'Nunigram' projectName = 'Instagram Frontend Clone'
        techUsed = {['ReactJS', 'Redux', 'Framer Motion', 'Auth0', 'TailwindCSS']}
        githubRepo = 'https://github.com/thomassbooth/nunigram-frontend'
        hosted = 'https://nunigram.netlify.app/'
        />
    </PageTransition>
  )
} 

export default ProjectsPage