import Header from '../components/layout/Header';
import styled from 'styled-components';
import nonbookmark from '../assets/bluenonbookmark.png';
import bookmark from '../assets/bluebookmark.png';
import Map from '../components/features/Map';
import Description from '../components/common/Description';
import { useLocation } from 'react-router-dom';
import { AnimalData } from '../hooks/useAnimals';
import { useState } from 'react';
import defaultImage from '../assets/default.jpg';
import { getSpecies, getGender, getNEUT, getAge, getWeight } from '../utils/animalDataUtils';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../store/bookmarkSlice';
import { RootState } from '../store/store';

function DetailPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const animal: AnimalData = location.state.animal;

    const bookmarkedIds = useSelector((state: RootState) => state.bookmark.bookmarkedIds);
    //true,false: 북마크하고있냐없냐 아이디를 배열에 넣어서 체크
    const isBookmarked = bookmarkedIds.includes(animal.ABDM_IDNTFY_NO ?? '');

    console.log(isBookmarked);

    const [imgSrc, setImgScr] = useState(animal.IMAGE_COURS ?? '');

    const handleImgError = () => {
        setImgScr(defaultImage);
    };

    const handleBookmarkClick = () => {
        dispatch(toggleBookmark(animal.ABDM_IDNTFY_NO ?? ''));

        //그럼 이제 로컬에 북마크 된 animal 데이터를 저장
        const storedAnimals: AnimalData[] = JSON.parse(localStorage.getItem('bookmarkedAnimals') || '[]');

        if (isBookmarked) {
            const updatedAnimals = storedAnimals.filter((a: AnimalData) => a.ABDM_IDNTFY_NO !== animal.ABDM_IDNTFY_NO);
            localStorage.setItem('bookmarkedAnimals', JSON.stringify(updatedAnimals));
        } else {
            storedAnimals.push(animal);
            localStorage.setItem('bookmarkedAnimals', JSON.stringify(storedAnimals));
        }
    };

    return (
        <>
            <Header />
            <Container className="mw">
                <HeadArea>
                    <Bookmark onClick={handleBookmarkClick}>
                        <BookmarkIcon src={isBookmarked ? bookmark : nonbookmark} />
                    </Bookmark>
                    <MainTitle>
                        <span className="point">공고번호</span> {animal.PBLANC_IDNTFY_NO}
                    </MainTitle>
                </HeadArea>
                <ContextArea>
                    <ImgArea>
                        <Image src={imgSrc} onError={handleImgError} />
                    </ImgArea>
                    <TextArea>
                        <Description title={'품종'} text={getSpecies(animal.SPECIES_NM ?? '')} />
                        <Description title={'성별'} text={getGender(animal.SEX_NM ?? '')} />
                        <Description title={'중성화여부'} text={getNEUT(animal.NEUT_YN ?? '')} />
                        <Description title={'나이'} text={getAge(animal.AGE_INFO ?? '')} />
                        <Description title={'체중'} text={getWeight(animal.BDWGH_INFO ?? '')} />
                        <Description title={'접수일시'} text={animal.RECEPT_DE ?? ''} />
                        <Description title={'발견장소'} text={animal.DISCVRY_PLC_INFO ?? ''} />
                        <Description title={'특징'} text={animal.SFETR_INFO ?? ''} />
                        <Description title={'공고기한'} text={`${animal.PBLANC_BEGIN_DE}~${animal.PBLANC_END_DE}`} />
                        <Description title={'보호센터'} text={animal.SHTER_NM ?? ''} />
                        <Description title={'센터주소'} text={animal.REFINE_ROADNM_ADDR ?? ''} />
                        <Description title={'연락처'} text={animal.SHTER_TELNO ?? ''} />
                    </TextArea>
                </ContextArea>
                <Title>
                    <span>
                        <span className="point">{animal.SHTER_NM}</span>에서
                    </span>
                    <span>기다리고 있어요</span>
                </Title>
                <Map x={animal.REFINE_WGS84_LAT ?? ''} y={animal.REFINE_WGS84_LOGT ?? ''} />
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-bottom: 4.5rem;
    padding-top: 4rem;

    @media (max-width: 650px) {
        padding-top: 2rem;
    }
`;

const HeadArea = styled.div`
    padding-top: 4rem;
    padding-bottom: 2rem;

    display: flex;
    gap: 0.5rem;
`;

const MainTitle = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.5px;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const Bookmark = styled.button`
    width: 22px;
    padding-top: 0.5rem;
`;

const BookmarkIcon = styled.img`
    width: 100%;
    content-fit: contain;
`;

const ContextArea = styled.div`
    display: flex;
    gap: 5rem;

    @media (max-width: 1440px) {
        gap: 2rem;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

const TextArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;

    @media (max-width: 850px) {
        width: 100%;
    }
`;

const ImgArea = styled.div`
    flex: 1;
    display: flex;
    height: 643px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`;

const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;
    padding-bottom: 2rem;
    display: flex;
    gap: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.7rem;
        flex-direction: column;
        gap: 0rem;
    }
`;

export default DetailPage;
