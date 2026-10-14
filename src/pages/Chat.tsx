import PageTitle from '../components/PageTitle';

import { useLoaderData, useLocation } from 'react-router-dom';
import UserPrompt from '../components/UserPrompt';
import MaiResponse from '../components/MaiResponse';
import { motion } from 'motion/react';
import ContentPreloader from '../components/ContentPreLoader';
import usePromptPreloader from '../hooks/usePromptPreloader';

interface ConvoItem {
  $id: string;
  user_prompt: string;
  ai_response: string;
}

const Chat = () => {
  const loaderData = useLoaderData() as {
    chat?: { title?: string; convos?: ConvoItem[] };
  };

  const title = loaderData.chat?.title || 'Chat';
  const convos = loaderData.chat?.convos || [];

  const { preLoaderVal } = usePromptPreloader();
  const loc = useLocation();

  return (
    <>
      <PageTitle title={`${title} | Mai AI`} />
      <motion.div
        className=""
        initial={!loc.state?._isRedirect && { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.07, ease: 'easeOut' }}
      >
        {convos.map((convo: ConvoItem) => (
          <div key={convo.$id}>
            <UserPrompt text={convo.user_prompt} />
            <MaiResponse text={convo.ai_response} />
          </div>
        ))}
      </motion.div>

      {preLoaderVal && <ContentPreloader text={preLoaderVal} />}
    </>
  );
};

export default Chat;
