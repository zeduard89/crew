import { FooterLink, FooterLinkSection } from '.'

export const AboutSection: React.FC = () => {
  return (
    <FooterLinkSection section='About'>
      <div className='mt-3 flex flex-col'>
        <FooterLink url='#'>About Us</FooterLink>
        <FooterLink url='#'>Blog</FooterLink>
        <FooterLink url='#'>Trust & Safety</FooterLink>
        <FooterLink url='#'>Help & Support</FooterLink>
        <FooterLink url='#'>Press</FooterLink>
        <FooterLink url='#'>Careers</FooterLink>
        <FooterLink url='#'>Contact</FooterLink>
      </div>
    </FooterLinkSection>
  )
}
