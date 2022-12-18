import styled from 'styled-components'

export const PostItem = styled.div`
    width: 259px;
    min-width: 259px;
    height: 124px;

    display: flex;
    column-gap: 8px;
        
    div:nth-child(2){
        flex: 1 1 0;
    }

    h3{
        font-size: 1.08rem;
        margin: 0;
    }

    p{
        
    }
`

export const PostCover = styled.div`
    color: white;
    width: 120px;
    height: 120px;
    background-color: grey;

    img{
        flex: 1 0 0;
        width: 120px;
        height: 120px;
        object-fit:cover;
    }
`
