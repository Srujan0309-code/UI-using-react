import React from 'react'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'

const App = () => {
  const data = [
    { img: 'https://images.pexels.com/photos/3123833/pexels-photo-3123833.jpeg?_gl=1*1tzykhu*_ga*MTc4MjQwNzkyMS4xNzU3MzQxNjg1*_ga_8JE65Q40S6*czE3Njc2Mzc1MzMkbzUkZzEkdDE3Njc2MzkxMjQkajIxJGwwJGgw', no: '1', tag: 'satisfied' },
    { img: 'https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?_gl=1*wxxo5s*_ga*MTc4MjQwNzkyMS4xNzU3MzQxNjg1*_ga_8JE65Q40S6*czE3Njc2Mzc1MzMkbzUkZzEkdDE3Njc2MzkxNjckajYwJGwwJGgw', no: '2', tag: 'Undereserved' },
    { img: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?_gl=1*2ppdb0*_ga*MTc4MjQwNzkyMS4xNzU3MzQxNjg1*_ga_8JE65Q40S6*czE3Njc2Mzc1MzMkbzUkZzEkdDE3Njc2Mzc2NjckajEwJGwwJGgw', no: '3', tag: 'unbanked' }
  ]

  return (
    <div>
      <Section1 user={data} />
      <Section2 />

    </div>
  )
}

export default App
