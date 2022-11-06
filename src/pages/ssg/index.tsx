import { GetStaticProps, NextPage, NextPageContext } from "next"

type Props = {
  message: string
}

const SSG: NextPage<Props> = (props) => {
  const { message } = props

  return (
    <>
      <h1>SSG</h1>
      <p>{message}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)
  return {
    props: {
      message,
    }
  }
}
export default SSG
