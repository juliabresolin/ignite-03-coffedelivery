import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 2;

  background: ${(props) => props.theme.white};
  padding: 2rem calc((100vw - 74rem) / 2);

  @media ${(props) => props.theme['desktop-small-bp']} {
    padding: 2rem;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const LocationButton = styled.button`
  width: 100%;
  height: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-900']};
  font-size: 0.875rem;
  padding: 0 0.5rem;
  transition: opacity 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    opacity: 0.9;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};

    @media ${(props) => props.theme['mobile-bp']} {
      width: 16px;
    }
  }
`

export const CartButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-100']};
  transition: opacity 0.2s;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-900']};

    @media ${(props) => props.theme['mobile-bp']} {
      width: 16px;
    }
  }

  &:hover {
    opacity: 0.9;
  }

  small {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['yellow-900']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
  }
`
