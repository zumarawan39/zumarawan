import { useTranslations } from 'next-intl';
import React from 'react'

const Home = () => {
  const t = useTranslations('app.Home');
  return (
    <>
    <div>
    <h1>{t('title')}</h1>
      
    </div>
    </>
  )
}

export default Home