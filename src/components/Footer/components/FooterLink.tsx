import { Link } from 'react-router-dom'

interface FooterLinkProps {
  url: string
  children: string
}

export const FooterLink: React.FC<FooterLinkProps> = ({ url, children }) => {
  return (
    <Link
      to={url}
      className='cursor-pointer duration-150 hover:text-secondaryDark'
    >
      {children}
    </Link>
  )
}
