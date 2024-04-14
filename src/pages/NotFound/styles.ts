import styled, { css } from 'styled-components'

const WrapperNotFound = styled.div`
  ${({theme}) => css`
    align-items: center;
    background-color: white;
    border-radius: ${theme.spacings.xxsmall};
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    height: 100%;
    justify-content: center;
    margin-bottom: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.mega}; 
    width: 100%;
  `}
`

const ContainerNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const TextNotFound = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
    height: auto;
    margin-bottom: ${theme.spacings.large};
    text-align: center;
    word-wrap: break-word;
  `}
`

const ImgContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Separator = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.blue};
    height: 1.36px;
    margin-bottom: ${theme.spacings.large};
    width: 100%;
  `}
`

export {ContainerNotFound, ImgContainer, TextNotFound, WrapperNotFound, Separator}

