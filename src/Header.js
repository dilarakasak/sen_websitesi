import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='yanyana'>
            <img className='logo' src='img/logo.jpg'></img> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/Kurumsal' className='yazi arkaplan'>KURUMSAL</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/Sektorler' className='yazi arkaplan'>SEKTÖRLER</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/Toplumsalfayda' className='yazi arkaplan'>TOPLUMSAL FAYDA</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/Kariyer' className='yazi arkaplan'>KARİYER</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a className='yazi'>BASIN & HABERLER</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/Bilgi' className='yazi arkaplan'>İLETİŞİM</a>
        </div>
    </div>
  )
}

export default Header;