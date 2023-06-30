interface FooterLinkProps {
  section: string
  children: React.ReactNode
}

export const FooterLinkSection: React.FC<FooterLinkProps> = ({
  children,
  section,
}) => {
  return (
    <div>
      <div className=' uppercase text-gray-500'>{section}</div>
      {children}
    </div>
  )
}
