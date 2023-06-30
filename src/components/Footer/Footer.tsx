import {
  AboutSection,
  EmailSection,
  EntrepreneursSection,
  ExploreSection,
} from './components'

export const Footer: React.FC = () => {
  return (
    <div className='flex h-[500px] w-full justify-around bg-gray-100 pb-10 pt-10'>
      <ExploreSection />
      <AboutSection />
      <EntrepreneursSection />
      <EmailSection />
    </div>
  )
}
