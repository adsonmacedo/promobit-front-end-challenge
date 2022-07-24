import * as S from './styles'
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from 'react-icons/hi'
import { useContext } from 'react'
import cx from 'classnames'
import { PaginationContext } from '../../contexts/PaginationContext'
import { useMediaQuery, useIsClient } from 'usehooks-ts'

export default function Pagination() {
  const { page, setPage, total } = useContext(PaginationContext)
  const isClient = useIsClient()
  const matches = useMediaQuery('(max-width: 500px)')

  console.log(matches)

  return (
    <S.Container>
      <S.Wrapper>
        <S.Pagination>
          <S.Button disabled={page === 1} onClick={() => setPage(1)}>
            {isClient && matches ? (
              <HiChevronDoubleLeft size={18} />
            ) : (
              'Primeira'
            )}
          </S.Button>
          <S.Button
            disabled={page === 1}
            onClick={() => (page > 1 ? setPage(page - 1) : 1)}
          >
            <HiChevronLeft size={20} />
          </S.Button>

          {[...Array(total)].slice(0, 5).map((_, idx) => (
            <S.Button
              key={idx}
              onClick={(e: any) => {
                setPage(+e.target.textContent)
              }}
              className={cx('numeric', {
                active:
                  page > 4
                    ? page === page - (page === total ? 4 : 3) + idx
                    : page === idx + 1,
              })}
            >
              {page > 4 ? page - (page === total ? 4 : 3) + idx : idx + 1}
            </S.Button>
          ))}

          <S.Button
            disabled={total === 1 || page === total}
            onClick={() => setPage(page + 1)}
          >
            <HiChevronRight size={20} />
          </S.Button>
          <S.Button
            disabled={total === 1 || page === total}
            onClick={() => setPage(total)}
          >
            {isClient && matches ? (
              <HiChevronDoubleRight size={18} />
            ) : (
              'Última'
            )}
          </S.Button>
        </S.Pagination>
      </S.Wrapper>
    </S.Container>
  )
}
