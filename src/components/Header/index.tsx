import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styles'
import logo from '../../assets/logo.svg'
import { LocationSearch } from '../Location'
import { useContext } from 'react'
import { Location, LocationContext } from '../../contexts/LocationContext'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { currentLocation, locationModalIsOpen, toggleOpenModal } =
    useContext(LocationContext)

  const { totalAmount } = useContext(CartContext)

  function formatLocationLabel(location: Location) {
    const formatted =
      location.nome + ', ' + location.microrregiao.mesorregiao.UF.sigla

    return formatted
  }

  function handleToggleLocationModal() {
    toggleOpenModal()
  }

  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="coffe delivery logo" />

        <ActionsContainer>
          <LocationButton type="button" onClick={handleToggleLocationModal}>
            <MapPin size={22} weight="fill" />
            {currentLocation && formatLocationLabel(currentLocation)}
            {!currentLocation && <span>Selecione um local</span>}
          </LocationButton>
          <CartButton type="button">
            <ShoppingCart size={22} weight="fill" />
            <small>{totalAmount}</small>
          </CartButton>
        </ActionsContainer>
      </HeaderContainer>

      {locationModalIsOpen && <LocationSearch />}
    </>
  )
}
