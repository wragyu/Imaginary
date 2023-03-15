import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)

router.route('/').get((req, res) => {
  res.send('Hello from DALL-E')
});

router.route('/').post( async (req, res) => {
  try {
    const { prompt } = req.body

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024'
    })
  } catch (error) {

  }
})

export default router
