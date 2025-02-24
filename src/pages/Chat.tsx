import PageTitle from "../components/PageTitle"

import { useLoaderData } from "react-router-dom"
import UserPrompt from "../components/UserPrompt";
import MaiResponse from "../components/MaiResponse";

const Chat = () => {
  const {
    chat: { title, convos }
  } = useLoaderData() || {};

  return (
    <>
      <PageTitle title={`${title} | Mai AI`} />
      <div className="">
        {convos.map((convo) => (
          <div key={convo.$id}>
            <UserPrompt text={convo.user_prompt} />
            <MaiResponse text={convo.ai_response} />
          </div>

        )
        )}
      </div>
    </>
  )
}

export default Chat;
