import React from 'react'
import './Anasayfa.css'

function Anasayfa() {
  return (
    <div className='anasayfa'>
        <div className='resim1_arkaplan resim1'></div>

        <h2 className='center'>RAKAMLARLA SEN</h2>
        <div className='yanyana kutu_bosluk'>
            <div className='kutu1'>
                <a className='kutu_yazi'>Mutlu Çalışanlar</a> <br/>
                <a className='yuzde'>%95</a>
            </div>
            <div className='altalta'>
                <div className='kutu2'>
                    <a className='kutu_yazi'>4 Büyük Sektörde</a> <br/><br/>
                    <a className='kutu_yazi'>Faaliyet</a>
                </div>
                <div className='kutu3'>
                    <a className='kutu_yazi'>300 Bin m2 Proje Geliştirme Hedefi</a>
                </div>
            </div>
            <div className='altalta'>
                <div className='kutu4'>
                    <a className='kutu_yazi'>İnşa Ettiğimiz Her m2'nin Minimum %10'u Kadar Ağaçlandırma Hedefi</a>
                </div>
                <div className='kutu5'>
                    <a className='kutu_yazi'>15.000 İnsanın Hayatına Dokunacak Yaşam Alanı</a>
                </div>
            </div>
            <div className='kutu6'>
                <a className='kutu_yazi'>30 Bin m2 Sürdürülebilir Faaliyet Alanı</a>
            </div>
        </div>

        <div className='sektorler'>
            <h2 className='center'>SEKTÖRLER</h2>
            <div className='yanyana sol_bosluk'>
                <img src='img/sektor1.jpg'></img> &nbsp;&nbsp;&nbsp;&nbsp;
                <img src='img/sektor2.jpg'></img> &nbsp;&nbsp;&nbsp;&nbsp;
                <img src='img/sektor3.jpg'></img> &nbsp;&nbsp;&nbsp;&nbsp;
                <img src='img/sektor4.jpg'></img>
            </div>
        </div>

        <div>
            <h2 className='center'>TOPLUMSAL FAYDA</h2>
            <img className='img_center t_faydaresim' src='img/t_fayda.jpg'></img>
        </div>

        <h2 className='center'>BASIN & HABERLER</h2>
        <div className='haberler_arkaplan resim1'>
            <div className='haber_seffafdiv img_center'>
                <a className='haber_yazi '>SEN'DEN NE HABER?</a> <br/>
                <a className='haber_yazi2'>Her geçen gün büyüyen ve gelişen Sen Grup Ailesi'nin dijital ve konvansiyonel medyaya yansıyan ve basında sıklıkla yer alan haberlerini takip etmek için tıklayınız.</a>
            </div>
        </div>

        <div className='kariyer_a'>
            <h2 className='center'>KARİYER</h2>
            <a className='center sol_bosluk'>Daha iyi bir toplum için çalışanlarımızı güçlendiriyor ve destekliyoruz. Siz de ekibimize katılın!</a> <br/><br/>
            <a className='center sol_bosluk'>Faaliyet gösterdiğimiz tüm coğrafyalarda farklı sektörler, departmanlar ve iş fırsatları hakkında daha fazla bilgi edinin.</a> <br/><br/>
            <div className='kariyer_div img_center'>KARİYER FIRSATLARINI KEŞFEDİN</div> <br/><br/>
        </div>

        <div>
            <h2 className='center'>BİZİMLE İLETİŞİME GEÇİN</h2> <br/><br/>
            <a className='sol_bosluk'>Mahmutbey Mah. Taşocağı Yolu Cad. Balance Rez. No.: 19/6 Güneşli/İstanbul 444 03 77 | info@sengrup.com</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='arama' placeholder='e-posta'></input>
            <button className='arama_btn'>Gönder</button>
        </div>
    </div>
  )
}

export default Anasayfa;