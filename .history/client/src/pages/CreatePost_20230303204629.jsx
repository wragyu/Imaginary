import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setFirst] = useState(second)


  return (
    <div>
      CreatePost
    </div>
  )
}

export default CreatePost
