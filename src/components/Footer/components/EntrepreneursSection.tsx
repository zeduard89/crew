import { FooterLink, FooterLinkSection } from '.'

export const EntrepreneursSection: React.FC = () => {
  return (
    <FooterLinkSection section='Entrepreneurs'>
      <div className='mt-3 flex flex-col'>
        <FooterLink url='#'>How It Works</FooterLink>
        <FooterLink url='#'>Education Center</FooterLink>
        <FooterLink url='#'>Experts Directory</FooterLink>
        <FooterLink url='#'>Fees</FooterLink>
        <FooterLink url='#'>Enterprise</FooterLink>
        <FooterLink url='#'>China</FooterLink>
      </div>
    </FooterLinkSection>
  )
}
