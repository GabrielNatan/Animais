import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:80px;
    background:#303030;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    .search{
        order:2;

        input{
            padding:5px;
            border: none;
            border-bottom:1px solid #FFF;
            background: transparent;
            outline:none;
            color: #FFF;
            ::placeholder{
                color: #FFF;
            }
        }

        button{
            border: none;
            padding:5px;
            color: #FFF;
            border-bottom:1px solid #FFF;
            background: transparent;
            outline:none;
        }
    }

    .logoName{
        order:1;
        color: #FFF;
        font-size:1.2rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;

        .search{
            input{
                width:350px;
            }
        }
        
        .logoName{
            position:absolute;
            right:40px;
            font-size:1.9rem;
        }
      }
`