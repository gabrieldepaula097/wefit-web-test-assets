import React from 'react';
import cartIcon from '../assets/cart.svg'

function Header() {
  return (
    <div className="Header" style={{width: 960, height: 88, paddingLeft: 16, paddingRight: 16, paddingTop: 24, paddingBottom: 24, background: '#2F2E41', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Wemovies" style={{width: 101.94, height: 25, color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>WeMovies</div>
      <div className="Cart" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div className="Labelcontent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex'}}>
          <div className="MeuCarrinho" style={{width: 95.95, height: 19, color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Meu Carrinho</div>
          <div className="Itens" style={{width: 41.98, height: 19, color: '#999999', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>0 itens</div>
        </div>
        <div className="Ico" style={{padding: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
          <img src={cartIcon} />
        </div>
      </div>
    </div>
    );
  }
  
  export default Header;
  