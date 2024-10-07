import { AnimalData } from '../hooks/useAnimals';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${apiKey}&Type=json`;

export const getTotalLength = async (): Promise<number> => {
    const url = `${BASE_URL}&pIndex=1&pSize=1000&STATE_NM=보호중`;
    const { data } = await axios.get(url);
    return data.AbdmAnimalProtect[0].head[0].list_total_count;
};

const fetchActiveData = async (page: number): Promise<AnimalData[]> => {
    const url = `${BASE_URL}&pIndex=${page}&pSize=1000&STATE_NM=보호중`;
    const { data } = await axios.get(url);
    return data.AbdmAnimalProtect[1].row;
};

export const fetchAllData = async () => {
    const totalLength = await getTotalLength();
    const totalPages = Math.ceil(totalLength / 1000); // 10,000개의 데이터를 가져오려면 1,000개씩 10 페이지 필요
    const queries = [];

    // 1~10 페이지까지 요청을 생성
    for (let i = 1; i <= totalPages; i++) {
        queries.push(fetchActiveData(i));
    }

    // 모든 페이지의 데이터를 병렬로 요청
    const results = await Promise.all(queries);

    // 모든 페이지의 데이터를 하나로 합치기
    return results.flat();
};
