import { type ShowState } from '../interface'

interface HandleCategoryFilterProps {
  event: React.MouseEvent<HTMLButtonElement>
  setShowState: React.Dispatch<React.SetStateAction<ShowState>>
}

export const handleCategoryFilter = ({
  event,
  setShowState,
}: HandleCategoryFilterProps): void => {
  const value = event.currentTarget.name
  setShowState((prevState) => ({
    ...prevState,
    category: value,
  }))
}

interface handleInputChangeProps {
  event: React.ChangeEvent<HTMLInputElement>
  setShowState: React.Dispatch<React.SetStateAction<ShowState>>
}

export const handleInputChange = ({
  event,
  setShowState,
}: handleInputChangeProps): void => {
  const value = event.target.value
  setShowState((prevState) => ({
    ...prevState,
    search: value,
  }))
}

interface handleSortSelectProps {
  event: React.ChangeEvent<HTMLSelectElement>
  setShowState: React.Dispatch<React.SetStateAction<ShowState>>
}

export const handleSortSelect = ({
  event,
  setShowState,
}: handleSortSelectProps): void => {
  const value = event.target.value
  setShowState((prevState) => ({
    ...prevState,
    sort: value,
  }))
}
