import { FooterLink, FooterLinkSection } from '.'

export const ExploreSection: React.FC = () => {
  return (
    <FooterLinkSection section='Explore'>
      <div className='mt-3 flex flex-col'>
        <FooterLink url='#'>What We Do</FooterLink>
        <FooterLink url='#'>Funding</FooterLink>
      </div>
    </FooterLinkSection>
  )
}
