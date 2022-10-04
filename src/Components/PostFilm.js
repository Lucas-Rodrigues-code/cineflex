import styled from 'styled-components';

export default function PostFilm() {
    return (
        <Post>
            <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Filme" />
        </Post>
    )
}

const Post = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    display:flex;
    align-items:center;
    justify-content:center;

    margin-top:10px;
    margin-bottom:10px;
    margin-left:15px;
    margin-right:15px;
    img{
        width: 129px;
        height: 193px;

    }
   
`