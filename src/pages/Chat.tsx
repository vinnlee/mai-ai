import PageTitle from "../components/PageTitle"

import { useLoaderData } from "react-router-dom"
import UserPrompt from "../components/UserPrompt";
import MaiResponse from "../components/MaiResponse";
import { motion } from "framer-motion"

const Chat = () => {
  const {
    chat: { title, convos }
  } = useLoaderData() || {};

  return (
    <>
      <PageTitle title={`${title} | Mai AI`} />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .25, delay: .07, ease: "easeOut" }}
      >
        {convos.map((convo) => (
          <div key={convo.$id}>
            <UserPrompt text={convo.user_prompt} />
            <MaiResponse text={convo.ai_response} />
          </div>

        )
        )}
      </motion.div>
    </>
  )
}

export default Chat;
