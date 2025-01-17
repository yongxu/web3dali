import wamo from './assets/wamo.svg'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const changeLanguage = () => {
  i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
}
function Footer() {
  const { t } = useTranslation()
  const openSocial = (url:string) => {
    window.open(url)
  }
  return (
    <div className="bg-black">
      <div className="box-container flex-between pt-12 pb-8 border-b border-white text-white mt-[2rem]">
        <div className="flex gap-4">
          <img src={wamo} alt="summer of wamo" />
          <div className="flex flex-col gap-2">
            <div>Summer of WAMO</div>
            <div className="text-sm">A Web3 Fest in Dali</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-8">
            <a href="#" className="text-white" onClick={changeLanguage}>
              中 / EN
            </a>
            <a href="#content" className="text-white">
              {t('header.content')}
            </a>
            <a href="#venue" className="text-white">
              {t('header.venue')}
            </a>
            <a href="#speaker" className="text-white">
              {t('header.speakers')}
            </a>
            {/* <a href="#" className="text-white">
              {t('header.nft')}
            </a> */}
            {/* <a href="#" className="text-white">
              {t('header.sbt')}
            </a> */}
            <a href="#about" className="text-white">
              {t('header.about')}
            </a>
          </div>
          <div className="social mt-3 flex ">
            <img
              src="/telegram.png"
              alt="dali_web3"
              onClick={() => openSocial('https://t.me/daliweb3')}
            />
            <img
              src="/twitter.png"
              alt="@dali_web3"
              className="ml-8"
              onClick={() => openSocial('https://twitter.com/dali_web3')}
            />
             <img
              src="/github.png"
              alt="@dali_web3"
              className="ml-8"
              onClick={() => openSocial('https://github.com/web3dali')}
            />
            <img
              src="/jike.png"
              alt="瓦猫之夏_大理web3街会"
              className="ml-8"
              onClick={() => openSocial('https://web.okjike.com/u/2B4FA9DE-D1D7-46BF-B2C0-DB16C73DDC55')}
            />
          </div>
        </div>
      </div>
      <div className="flex-center text-white pt-8 pb-15">
        @ 2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
