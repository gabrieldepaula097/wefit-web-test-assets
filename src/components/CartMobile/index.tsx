import { Div } from "pages/Cart/styles"
import { useSelector } from "react-redux"
import { RootState } from "redux"

const CartMobile = () => {
  const movieList = useSelector((state: RootState) => state.cart.movies)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  return (
    <>
    {movieList.map((movie: IMovie) =>
      <Div>
        <img className="ViuvaNegra" style={{width: 64, height: 82}} src={movie.image} />
        <div className="Frame34" style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
          <div className="Frame31" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div className="HomemAranha" style={{flex: '1 1 0', color: '#2F2E41', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>{movie.title}</div>
            <div className="Frame38" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
              <div className="R2999" style={{color: '#2F2E41', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>R$ {(movie.price).toFixed(2)}</div>
            </div>
            <div className="Vector" style={{width: 16, height: 18, background: '#009EDD'}}></div>
          </div>
          <div className="Frame37" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div className="Frame27" style={{height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 11, display: 'flex'}}>
              <div className="Vector" style={{width: 18, height: 18, background: '#009EDD'}}></div>
              <div className="Frame32" style={{flex: '1 1 0', height: 26, paddingLeft: 12, paddingRight: 12, paddingTop: 16, paddingBottom: 16, background: 'white', borderRadius: 4, border: '1px #D9D9D9 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: '#2F2E41', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>1</div>
              </div>
              <div className="Vector" style={{width: 18, height: 18, background: '#009EDD'}}></div>
            </div>
            <div className="Frame36" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', display: 'inline-flex'}}>
              <div className="Subtotal" style={{color: '#999999', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>SUBTOTAL</div>
              <div className="R2999" style={{color: '#2F2E41', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>R$ {Number(movie.count * movie.price).toFixed(2)}</div>
            </div>
          </div>
        </div>
      </Div>
      )}
    </>
  )
}

export {CartMobile}