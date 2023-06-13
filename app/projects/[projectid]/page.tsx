
interface IParams {
  projectid: string
}

const ProjectPage = ({ params }: { params: IParams }) => {
  return (
    <div>{params.projectid}</div>
  )
}

export default ProjectPage