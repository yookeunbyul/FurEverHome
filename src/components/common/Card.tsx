import styled from 'styled-components';
import nonbookmark from '../../assets/nonbookmark.png';
import bookmark from '../../assets/bookmark.png';
import { useNavigate } from 'react-router-dom';
import { AnimalData } from '../../hooks/useAnimals';
import { getAge, getGender, getNEUT, getSpecies, getState } from '../../utils/animalDataUtils';
import defaultImage from '../../assets/default.jpg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//store에서 가져와야한다.
import { RootState } from '../../store/store';
import { toggleBookmark } from '../../store/bookmarkSlice';

interface CardProps {
    animal: AnimalData; // oneDayList를 객체로 정의
    onRemoveBookmark?: (animalId: string) => void;
}

function Card({ animal, onRemoveBookmark }: CardProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [imgSrc, setImgScr] = useState(animal.IMAGE_COURS ?? '');

    const bookmarkedIds = useSelector((state: RootState) => state.bookmark.bookmarkedIds);
    //true,false: 북마크하고있냐없냐 아이디를 배열에 넣어서 체크
    const isBookmarked = bookmarkedIds.includes(animal.ABDM_IDNTFY_NO ?? '');

    const handleImgError = () => {
        setImgScr(defaultImage);
    };

    const handleBookmarkClick = () => {
        const animalId = animal.ABDM_IDNTFY_NO ?? '';

        // 북마크 상태 토글
        dispatch(toggleBookmark(animalId));

        // 로컬에 북마크 된 animal 데이터를 저장
        const storedAnimals: AnimalData[] = JSON.parse(localStorage.getItem('bookmarkedAnimals') || '[]');

        // 현재 동물이 이미 북마크에 있는지 확인
        // [{SIGUN_CD: "41590", SIGUN_NM: "화성시", ABDM_IDNTFY_NO: "441553202403019",…}] => 객체의 배열이라 includes 말고 some을 사용
        const isBookmarked = storedAnimals.some((animal) => animal.ABDM_IDNTFY_NO === animalId);

        if (isBookmarked) {
            // 북마크에서 제거
            const updatedAnimals = storedAnimals.filter((animal) => animal.ABDM_IDNTFY_NO !== animalId);
            localStorage.setItem('bookmarkedAnimals', JSON.stringify(updatedAnimals));

            if (onRemoveBookmark) {
                onRemoveBookmark(animalId); // 부모 컴포넌트에  => BookMarkPage에 전달
            }
        } else {
            // 북마크 추가
            storedAnimals.push(animal);
            localStorage.setItem('bookmarkedAnimals', JSON.stringify(storedAnimals));
        }
    };

    return (
        <Container>
            <NavigationArea
                onClick={() => {
                    navigate(`/detail/${animal.ABDM_IDNTFY_NO}`, { state: { animal } });
                }}
            >
                <Badge state={getState(animal.STATE_NM ?? '')}>{getState(animal.STATE_NM as string)}</Badge>
                <ImgArea>
                    <Image src={imgSrc} onError={handleImgError} />
                </ImgArea>
            </NavigationArea>
            <NameArea>
                <Name>{getSpecies(animal.SPECIES_NM ?? '')}</Name>
                <Bookmark onClick={handleBookmarkClick}>
                    <BookmarkIcon src={isBookmarked ? bookmark : nonbookmark} />
                </Bookmark>
            </NameArea>
            <TextArea>
                <Line>
                    <Option>나이</Option>
                    <div>{getAge(animal.AGE_INFO ?? '')}</div>
                </Line>
                <Line>
                    <Option>시도군</Option>
                    <div>{animal.SIGUN_NM}</div>
                </Line>
                <Line>
                    <Option>성별</Option>
                    <div>{getGender(animal.SEX_NM ?? '')}</div>
                </Line>
                <Line>
                    <Option>중성화</Option>
                    <div>{getNEUT(animal.NEUT_YN ?? '')}</div>
                </Line>
            </TextArea>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const NavigationArea = styled.div`
    cursor: pointer;
`;

const ImgArea = styled.div`
    border-radius: 0.5rem;
    margin-bottom: 0.3rem;
    width: 100%;
    aspect-ratio: 1 / 1; // 1:1 비율 유지
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지를 비율에 맞게 조정 */
    border-radius: 0.5rem;
`;

const NameArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`;

const TextArea = styled.div``;

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 0.3rem 0;
    letter-spacing: -1px;
`;

const Badge = styled.div<{ state: string }>`
    position: absolute;
    background-color: ${(props) => (props.state === '보호중' ? '#47b2ff' : '#7F7F7F')};
    top: 3%;
    left: 5%;
    width: 60px;
    text-align: center;
    padding: 0.2rem 0.8rem;
    font-size: 0.8rem;
    letter-spacing: -0.8px;
    border-radius: 1rem;
    color: #ffffff;
    font-weight: 600;
`;

const Name = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: -1px;
`;

const Option = styled.div`
    color: #7f7f7f;
`;

const Bookmark = styled.button`
    width: 18px;
    padding-top: 0.2rem;
`;

const BookmarkIcon = styled.img`
    width: 100%;
    content-fit: contain;
`;

export default Card;
