import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return <S.Layout>{children}</S.Layout>
}

export default Layout
