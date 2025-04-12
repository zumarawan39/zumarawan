import { useTranslations } from 'next-intl';
import React from 'react'

const Home = () => {
  const t = useTranslations('app.Home');
  return (
    <>
    {/* <div className='border container m-auto'>
    <h1>{t('title')}</h1>
      
    </div> */}
    <div className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
  Hello Theme!
</div>

    </>
  )
}

export default Home