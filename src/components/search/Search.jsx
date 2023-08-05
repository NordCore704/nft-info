import React from 'react'
import { PreferenceOne, PreferenceTwo, PreferenceThree, PreferenceFour } from '@/exports'

const Search = () => {
  return (
    <div className='p-4 flex flex-col gap-8'>
        <p className='text-4xl font-bold text-center mt-4'>Please Select Your Search Preference Below:</p>
        <PreferenceOne />
        <PreferenceTwo />
        <PreferenceThree />
        <PreferenceFour />
    </div>
  )
}

export default Search