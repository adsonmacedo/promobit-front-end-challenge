import { useState } from 'react'
import cx from 'classnames'
import * as S from './styles'
import { RiCloseCircleFill } from 'react-icons/ri'

type Props = {
  children: React.ReactNode
  id: number
  handleFilters: (id: number) => void
}

export default function FilterButton({ children, id, handleFilters }: Props) {
  const [active, setActive] = useState(false)

  return (
    <S.Button
      type="button"
      className={cx({ active })}
      onClick={() => {
        setActive(!active)
        handleFilters(id)
      }}
    >
      {children}
      {active && <RiCloseCircleFill size={20} />}
    </S.Button>
  )
}
