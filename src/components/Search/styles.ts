import styled, { css } from 'styled-components'

const SearchWrapper = styled.div`
  ${({theme}) => css`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-bottom: ${theme.spacings.xxlarge};
    row-gap: ${theme.spacings.medium};
    width: 100%;
  `}
`

const SearchBar = styled.input`
  ${({theme}) => css`
    align-items: flex-start;
    background: ${theme.colors.white};
    border-radius: ${theme.spacings.xsmall};
    color: ${theme.colors.base};
    display: inline-flex;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
    gap: ${theme.spacings.medium};
    height: 56px;
    justify-content: flex-start;
    padding: ${theme.spacings.medium};
    width: 100%;
    word-wrap: break-word;

    &:focus {
      border: 2px ${theme.colors.buttonBlue} solid;
      outline: none;
    }
  
  `}
`

const SearchIcon = styled.img`
  ${({theme}) => css`
    cursor: pointer;
    height: 24px;
    width: 24px;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: ${theme.spacings.small};
    transform: translateY(-50%);
  `}
`

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`

const SearchResult = styled.div`
  align-items: flex-start;
  display: inline-flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const MovieCard = styled.div`
  ${({theme}) => css`
    align-items: center;
    background: ${theme.colors.white};
    border-radius: ${theme.spacings.xxsmall};
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    justify-content: flex-start;
    padding: ${theme.spacings.medium};
    width: 32%;
    margin-bottom: 16px;
    margin-right: 12px; //Todo: MUDAR
    
    .movie:nth-oft-ype(3n) {
      margin-right: 0px;
    }
  `}
`

const MovieInfo = styled.div`
  ${({theme}) => css`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    justify-content: flex-start;
    width: 100%;
  `}
`

const MovieName = styled.span`
  ${({theme}) => css`
    text-align: 'center',
    color: ${theme.colors.textMovie},
    font-size: ${theme.font.sizes.xsmall};
    font-weight: bold;
    word-wrap: break-word;
  `}
`

const MoviePrice = styled.span`
  ${({theme}) => css`
    text-align: center;
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    word-wrap: break-word;
  `}
`

const MoviesContainer = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-wrap: wrap;  
  width: 100%;
`

const AddToCart = styled.button`
  ${({theme}) => css`
    align-items: center;
    background: ${theme.colors.buttonBlue};
    border: none;
    border-radius: ${theme.spacings.xxsmall};
    cursor: pointer
    display: inline-flex;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: bold;
    gap: ${theme.spacings.small};
    height: 40px;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    text-align: center;
    width: 100%;
    word-wrap: break-word;
  `}
`

const IconContainer = styled.div`
  bottom: 2px;
  height: 17px;
  position: relative;
  width: 25px;
`

const IconButton = styled.img`
  ${({theme}) => css`
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    left: 0;
    position: absolute;
    top: ${theme.spacings.xxsmall};
  `}
`

const CartCounter = styled.span`
  ${({theme}) => css`
    font-weight: ${theme.font.regular};
    height: 17px;
    left: 17px;
    position: absolute;
    text-align: center;
    top: 3px;
  `}
`

const MovieImg = styled.img`
  height: 188px;
  width: 147px;
`

export { SearchBarWrapper, SearchBar, SearchIcon, SearchResult, SearchWrapper, MovieCard, MovieInfo, MovieName, MoviePrice, AddToCart, IconButton, CartCounter, IconContainer, MovieImg, MoviesContainer }