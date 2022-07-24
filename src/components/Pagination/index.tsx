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

export default function Pagination({ onClick }) {
  const { page, setPage, total } = useContext(PaginationContext)
  const isClient = useIsClient()
  const matches = useMediaQuery('(max-width: 500px)')

  return (
    <S.Container>
      <S.Wrapper>
        <S.Pagination>
          <S.Button
            className={cx({ disabled: page === 1 })}
            onClick={() => {
              setPage(1)
              if (page > 1) onClick()
            }}
          >
            {isClient && matches ? (
              <HiChevronDoubleLeft size={18} />
            ) : (
              'Primeira'
            )}
          </S.Button>
          <S.Button
            className={cx({ disabled: page === 1 })}
            onClick={() => {
              page > 1 ? setPage(page - 1) : 1
              if (page > 1) onClick()
            }}
          >
            <HiChevronLeft size={20} />
          </S.Button>

          <S.ButtonNumeric>
            {[...Array(total)].slice(0, 5).map((_, idx) => (
              <S.Button
                key={idx}
                onClick={(e: any) => {
                  const pageNum = +e.target.textContent
                  setPage(pageNum)
                  if (page !== pageNum) onClick()
                }}
                className={cx({
                  active:
                    page > 4
                      ? page === page - (page === total ? 4 : 3) + idx
                      : page === idx + 1,
                })}
              >
                {page > 4 ? page - (page === total ? 4 : 3) + idx : idx + 1}
              </S.Button>
            ))}
          </S.ButtonNumeric>

          <S.Button
            className={cx({ disabled: total === 1 || page === total })}
            onClick={() => {
              if (total !== 1 && page !== total) {
                setPage(page + 1)
                onClick()
              }
            }}
          >
            <HiChevronRight size={20} />
          </S.Button>
          <S.Button
            className={cx({ disabled: total === 1 || page === total })}
            onClick={() => {
              setPage(total)
              if (page !== total) onClick()
            }}
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
