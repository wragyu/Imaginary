import FileSaver from 'file-saver';
import FileSavler from 'file-saver'

import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt){
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  // checks if the prompt is the same
  if(randomPrompt === prompt){
    return getRandomPrompt(prompt)
  }

  return randomPrompt
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, 'download')
}
