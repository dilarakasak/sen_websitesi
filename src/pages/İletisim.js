import React from 'react'
import './İletisim.css'

function İletisim() {
  return (
    <div>
        <div className='iletisim_arkaplan img_center'></div>
        <div className='iletisim'>
            <br/><br/>
            <a className='baslik solBosluk'>İLETİŞİM</a>
        </div>
      <br/><br/><br/><br/>

      <div className='alan5'>
        <div className='flex'>
          <div className='secenek'>
            <a className='secenek_yazi'>İLETİŞİM</a>
          </div>

          <div className='aciklama'>
            <a className='baslik2'>BİZİMLE İLETİŞİME GEÇİN</a>
            <br/><br/><br/><br/>
            <a>Mahmutbey Mah. Taşocağıyolu Cad. Balance Güneşli, No.: 19/6 Güneşli/İstanbul</a>
            <br/><br/>
            <a className='baslik2'>444 03 77</a> <br/>
            <a className='baslik2'>info@sengrup.com</a>
            <br/><br/><br/><br/>
            <input className='arama' placeholder='e-posta'></input>
            <button className='arama_btn'>Gönder</button>
            <br/><br/><br/><br/><br/>
            <a>ATAŞEHİR</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default İletisim;