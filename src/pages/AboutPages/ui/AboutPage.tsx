import { useTranslation } from "react-i18next";

/** Об проекте */
const AboutPage = () => {
  const {t} = useTranslation('about');

  return (
    <div>{t('About page')}</div>
  )
}

export default AboutPage;