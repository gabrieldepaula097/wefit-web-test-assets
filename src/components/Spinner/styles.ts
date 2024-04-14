import styled from 'styled-components'

const SpinnerContainer = styled.div`
  align-items: center;
  display: inline-flex;
  height: 150px;
  justify-content: center;
`

const SpinnerStyled = styled.div`
  width: 83px;
  height: 83px;
  border-radius: 50%;
  background: radial-gradient(farthest-side,#e6e6e6 94%,#0000) top/9px 9px no-repeat,
  conic-gradient(#0000 30%,#e6e6e6);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0);
  animation: spinner 1s infinite linear;
  }

  @keyframes spinner {
    100% {
      transform: rotate(1turn);
    }
  }
`

export {SpinnerContainer, SpinnerStyled}