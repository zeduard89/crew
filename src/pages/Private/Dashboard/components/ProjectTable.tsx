import { formatDate, deleteProjectFetcher } from '@/utils'
import { type IProject } from '@/interfaces'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'
import { useQueryClient } from '@tanstack/react-query'

interface TableProps {
  responseData: IProject[]
}

export const ProjectTable: React.FC<TableProps> = ({ responseData }) => {
  const queryClient = useQueryClient()

  const deleteProject = async (project: IProject): Promise<void> => {
    await deleteProjectFetcher(project)
    const updatedData = responseData.map((proj) =>
      proj.id === project.id
        ? { ...proj, displayProject: !proj.displayProject }
        : proj
    )
    queryClient.setQueryData(['allProjects'], updatedData)
    await queryClient.invalidateQueries(['allProjects'])
  }

  return (
    <table className='w-full divide-y divide-gray-200 text-secondary'>
      <thead>
        <tr className='text-left text-lg text-[#3a86ff]'>
          <th className='px-6 py-3'>Title</th>
          <th className='px-6 py-3'>Category</th>
          <th className='px-6 py-3'>Current Fund</th>
          <th className='px-6 py-3'>Creation Date</th>
          <th className='px-6 py-3'>Project Status</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        {responseData?.map((project: IProject) => (
          <tr key={project.id} className='text-white'>
            <td className='px-6 py-4'>{project.title}</td>
            <td className='px-6 py-4'>{project.category}</td>
            <td className='px-6 py-4'>{`$  ${project.fundingCurrent.toLocaleString(
              'en-US'
            )}`}</td>
            <td className='px-6 py-4 text-sm'>
              {formatDate(project.createdAt)}
            </td>
            <td className='flex flex-row px-6 py-4'>
              {project?.displayProject ? (
                <p className='mr-2.5 text-green-500'>Active</p>
              ) : (
                <p className='text-red-500'>Disable</p>
              )}
              <button
                onClick={async () => {
                  await deleteProject(project)
                }}
              >
                {project?.displayProject ? (
                  <DeleteForeverIcon className='ml-4 text-green-500 transition-colors duration-1000 hover:scale-110' />
                ) : (
                  <RestoreFromTrashIcon className='ml-4 text-red-500 transition-colors duration-1000 hover:scale-110 ' />
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
