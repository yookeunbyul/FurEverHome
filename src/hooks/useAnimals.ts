import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

export interface AnimalData {
    ABDM_IDNTFY_NO: string | null;
    AGE_INFO: string | null;
    BDWGH_INFO: string | null;
    CHRGPSN_CONTCT_NO: string | null;
    CHRGPSN_NM: string | null;
    COLOR_NM: string | null;
    DISCVRY_PLC_INFO: string | null;
    IMAGE_COURS: string | null;
    JURISD_INST_NM: string | null;
    NEUT_YN: string | null;
    PARTCLR_MATR: string | null;
    PBLANC_BEGIN_DE: string | null;
    PBLANC_END_DE: string | null;
    PBLANC_IDNTFY_NO: string | null;
    PROTECT_PLC: string | null;
    RECEPT_DE: string | null;
    REFINE_LOTNO_ADDR: string | null;
    REFINE_ROADNM_ADDR: string | null;
    REFINE_WGS84_LAT: string | null;
    REFINE_WGS84_LOGT: string | null;
    REFINE_ZIP_CD: string | null;
    SEX_NM: string | null;
    SFETR_INFO: string | null;
    SHTER_NM: string | null;
    SHTER_TELNO: string | null;
    SIGUN_CD: string | null;
    SIGUN_NM: string | null;
    SPECIES_NM: string | null;
    STATE_NM: string | null;
    THUMB_IMAGE_COURS: string | null;
}

export interface ApiResponse {
    AbdmAnimalProtect: [
        {
            head: [
                { list_total_count: number },
                { RESULT: { CODE: string; MESSAGE: string } },
                { api_version: string }
            ];
        },
        {
            row: AnimalData[];
        }
    ];
}

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${apiKey}&Type=json`;

const getAnimals = async (
    pageIndex: number,
    pageSize: number,
    sigun: string,
    endtDate: string,
    state: string,
    species: string,
    shelter: string
): Promise<ApiResponse> => {
    let url = `${BASE_URL}&pIndex=${pageIndex}&pSize=${pageSize}`;

    if (sigun) url += `&SIGUN_NM=${sigun}`;
    if (endtDate) url += `&PBLANC_END_DE=${endtDate}`;
    if (state) url += `&STATE_NM=${state}`;
    if (species) url += `&SPECIES_NM=${species}`;
    if (shelter) url += `&SHTER_NM=${shelter}`;

    const response = await axios.get<ApiResponse>(url);
    return response.data;
};

export const useAnimals = (
    pageIndex: number = 1,
    pageSize: number = 18,
    sigun: string = '',
    endtDate: string = '',
    state: string = '',
    species: string = '',
    shelter: string = ''
): UseQueryResult<ApiResponse, Error> => {
    return useQuery<ApiResponse, Error>({
        queryKey: ['animals-hook', pageIndex, pageSize, sigun, endtDate, state, species, shelter],
        queryFn: () => getAnimals(pageIndex, pageSize, sigun, endtDate, state, species, shelter),
        staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
        retry: 1,
        refetchOnWindowFocus: false, //브라우저 창이 포커스될 때 쿼리를 다시 가져올지말지
        enabled: true, //쿼리 활성화
    });
};
