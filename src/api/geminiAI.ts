import { ai } from '@/lib/geminiAi';

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const getConvoTitle = async (userPrompt: string) => {
  try {
    const result = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Given a user prompt, generate a concise informative title that describes the conversation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
      Prompt: ${userPrompt},
      `,
    });
    return result.text;
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        `There was a error generating the title for this conversation: ${error.message}`,
      );
    }
  }
};

const getGeminiResponse = async (
  userPrompt: string,
  chatHistory: { user_prompt: string; ai_response: string }[] = [],
): Promise<string> => {
  const history: ChatMessage[] = [];

  chatHistory.forEach(({ user_prompt, ai_response }) => {
    history.push(
      {
        role: 'user',
        parts: [{ text: user_prompt }],
      },
      {
        role: 'model',
        parts: [{ text: ai_response }],
      },
    );
  });

  try {
    const chat = ai.chats.create({
      model: 'gemini-3.8-flash',
      history: history,
      config: {
        temperature: 1.5,
      },
    });

    const response = await chat.sendMessage({ message: userPrompt });

    return response.text || '';
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error getting response ${error.message}`);
    }
    return '';
  }
};

export { getConvoTitle, getGeminiResponse };
