import MaiResponse from "./MaiResponse"
import TypingLoader from "./TypingLoader";
import UserPrompt from "./UserPrompt"


interface ContentPreloaderProps {
  text: string;
}

const ContentPreloader = ({ text }: ContentPreloaderProps) => {
  return (
    <div>
      <UserPrompt text={text} />
      <MaiResponse >
        <TypingLoader />
      </MaiResponse>
    </div>
  )
}

export default ContentPreloader
