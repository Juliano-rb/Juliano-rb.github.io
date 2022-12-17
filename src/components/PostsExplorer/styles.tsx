import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const PostExplorer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    column-gap: 8px;

    /* width */
    &::-webkit-scrollbar {
        height: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px ${colors.secondary};
        border-radius: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${colors.secondary};
        border-radius: 4px;
    }
`
