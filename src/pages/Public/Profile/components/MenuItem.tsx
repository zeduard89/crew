enum UserMenuOptions {
  Profile = 'Profile',
  Projects = 'Projects',
  Contributions = 'Contributions',
  Settings = 'Settings',
}

interface MenuItemProps {
  menuOption: UserMenuOptions
  currentOption: UserMenuOptions
  onClick: (option: UserMenuOptions) => void
}

export const MenuItem: React.FC<MenuItemProps> = ({
  menuOption,
  currentOption,
  onClick,
}) => {
  const isSelected = menuOption === currentOption

  return (
    <div className='flex-none'>
      <p
        className={`mr-10 text-2xl duration-300 ease-in-out ${
          isSelected
            ? 'cursor-default font-extrabold text-secondaryDark underline underline-offset-8'
            : 'cursor-pointer hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
        }`}
        onClick={() => {
          onClick(menuOption)
        }}
      >
        {menuOption}
      </p>
    </div>
  )
}
