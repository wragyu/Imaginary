import React from 'react'

const FormField = ({ LableName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseme }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >

        </label>

      </div>
    </div>
  )
}

export default FormField
