import React from 'react'
import './Kurumsal.css'

function Kurumsal() {
  return (
    <div>
      <div className='kurumsal_arkaplan img_center'></div>
      <div className='biz'>
        <br/><br/>
        <a className='biz_yazi s_bosluk'>BİZ</a>
      </div>
      <br/><br/><br/><br/>
      <div className='flex'>
        <div className='secenek'>
          <a className='secenek_yazi'>BİZ</a> <br/><br/>
          <a className='secenek_yazi'>MANİFESTO</a> <br/><br/>
          <a className='secenek_yazi'>YÖNETİM KURULU BAŞKANI'NIN MESAJI</a> <br/><br/>
          <a className='secenek_yazi'>CEO'NUN MESAJI</a> <br/><br/>
          <a className='secenek_yazi'>ÜST YÖNETİM</a>
        </div>

        <div className='aciklama'>
          <a>İnşaat sektöründe, firmamız sağlam, güvebilir, kaliteli ve çevre dostu projelere imza atarak başarıyla yoluna devam etmektedir. Ürettiğimiz projelerde geniş peyzaj alanlarına ve sosyal tesislere odaklanarak sektörde tercih edilen bir marka haline gelmiş bulunmaktayız. Değişen dünya trendlerini yakından takip ediyor ve çağın gereklerine uygun projelere imza atma kararlığımızı sürdürüyoruz.</a>
          <br/><br/>
          <a>Firmamız, üreteceği projelerde tüm müşterilerine konforlu, sürdürülebilir, ekonomik ve çevre dostu bir yaşam alanı sunma misyonuyla hareket etmektedir. "Yaşanabilir ve Sürdürülebilir projeler" vizyonuyla yola çıkan Sen Grup, sadece bugünkü nesiller için değil, aynı zamanda gelecek nesiller için de kaliteli yaşam alanları oluşturmayı amaçlamaktadır. Bu doğrultuda, çevreye ve sosyal etki alanına saygılı projeler geliştirme konusundaki kararlığımızı sürdürerek sektörde öncü bir rol oynamayı hedefliyoruz.</a>
        </div>
      </div>
    </div>
  )
}

export default Kurumsal;