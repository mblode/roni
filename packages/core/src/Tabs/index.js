import { Tabs as RTabs } from 'react-tabs'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import { get } from '../Theme'

const Tabs = styled(RTabs)`
    font-family: ${get('fonts.normal')};
    ${space}
    ${color}
`

Tabs.propTypes = {
    ...color.propTypes,
    ...space.propTypes
}

export default Tabs
