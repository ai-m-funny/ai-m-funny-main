import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function getPrompt (req:NextApiRequest, res:NextApiResponse) {
  console.log('inside getPrompt')
  const response = await openai.createImage({
    prompt: generatePrompt(req.body.text),
    n: 4,
    size: "1024x1024",
  });
  res.status(200).json({ image_url: response.data.data[0].url });
}

function generatePrompt(text:string) {
  console.log('text in function: ', text)
  return `${text}`;
}