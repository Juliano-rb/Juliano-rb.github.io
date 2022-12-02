import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../../public/profile.jpg'

export default function Header () {
  return (
    <S.Header>
        <S.ImagePane>
            <Image width={120} height={120} src={profile} alt="Imagem de perfil de Juliano R. Barbosa" />
        </S.ImagePane>
        <S.DetailsPane>
            <div>
                <h1>
                    Juliano R. Barbosa
                </h1>
                <p>Desenvolvedor de Software e aspirante à várias coisas</p>
            </div>
            <S.Nav>
                <ul>
                    <li className='home'><Link href="/" prefetch={false}>Início</Link></li>
                    <li><a href="https://github.com/Juliano-rb">github</a></li>
                    <li><a href="https://www.linkedin.com/in/juliano-barbosa-459a75159">linkedin</a></li>
                    <li><a href="https://twitter.com/jul1anoro">twitter</a></li>
                </ul>
                <hr />
            </S.Nav>
        </S.DetailsPane>
    </S.Header>
  )
}
