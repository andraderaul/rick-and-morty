type Props = {
  title: string
}

export default function Home({ title = 'React' }: Props) {
  return <div>{title}</div>
}
