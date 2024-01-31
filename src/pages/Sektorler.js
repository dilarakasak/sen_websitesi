import React from 'react'
import './Sektorler.css'

function Sektorler() {
  return (
    <div>
      <div className='sektorler_arkaplan img_center'></div>
      <div className='gayrimenkul'>
        <br/><br/>
        <a className='baslik bosluk'>GAYRİMENKUL</a>
      </div>
      <br/><br/><br/><br/>
      <div className='flex'>
        <div className='secenek'>
          <a className='secenek_yazi'>GAYRİMENKUL</a> <br/><br/>
          <a className='secenek_yazi'>PROJE YÖNETİMİ</a> <br/><br/>
          <a className='secenek_yazi'>TURİZM</a> <br/><br/>
          <a className='secenek_yazi'>TESİS YÖNETİMİ</a>
        </div>

        <div className='aciklama'>
          <a>En değerli yatırım; SEN.</a>
          <br/><br/>
          <a>Önce değer üretiyor, sonra tüm değerlerimizi yatırım için en çok değer verdiğimşz şey ile; yani "sen" diye nitelendirdiğimiz insanlarla paylaşıyoruz.</a>
          <br/><br/>
          <a>Gayrimenkul geliştirme sektöründe yüksek hedef ve standartlar belirleyen şirketimiz, fark yaratan konut projeleriyle dikkat çekmeyi amaçlıyor. Planladığımız projeler, konum avantajları ve benzersiz tasarımlarıyla öne çıkarak sektöre damga vurmayı hedefliyoruz.</a>
          <br/><br/>
          <a>Merkezi konumlarımız, şehir merkezlerine olan yakınlığıyla projelerimizi özel kılarken, yeşil alanlar ve sosyal donatılarla çevrili yaşam alanları yaratmayı planlıyoruz. Fiyat avantajları ve kişiye özel ödeme seçenekleri ile geniş bir kesime hitap ederek, müşterilerimize özel konut çözümleri sunmayı amaçlıyoruz.</a>
          <br/><br/>
          <a>Yüksek getiri potansiyeline sahip projelerimiz, uzun vadeli bir yatırım stratejisi izleyerek yatırımcıları cezbetmeyi planlıyor. Ayrıca, satış sonrası hizmet kalitemizde müşteri memnuniyetini sürdürmeyi ve uzun vadeli ilişkiler kurmayı ön planda tutuyoruz.</a>
          <br/><br/>
          <a>Güçlü marka imajımız, güvenilir bir gayrimenkul geliştirme markası olarak müşterilerimize güvence sağlamayı amaçlıyor ve sektörde tercih edilen bir konut markası olma vizyonumuz doğrultusunda çalışmalarımızı sürdürüyoruz.</a>
        </div>
      </div>
    </div>
  )
}

export default Sektorler;