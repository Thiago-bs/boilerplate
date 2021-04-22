type Props = {
  title: string
}

export default function Home({ title = 'React Avançado' }: Props) {
  return <div>{title}</div>
}
