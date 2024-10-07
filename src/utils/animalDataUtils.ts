export const getState = (label: string) => {
    return label.startsWith('종료') ? '종료' : label;
};

export const getGender = (gender: string) => {
    switch (gender) {
        case 'M':
            return '남아';
        case 'F':
            return '여아';
        default:
            return '알수없음';
    }
};

export const getNEUT = (neut: string) => {
    switch (neut) {
        case 'Y':
            return '완료';
        case 'N':
            return '미완료';
        default:
            return '알수없음';
    }
};

export const getSpecies = (species: string) => {
    if (species.startsWith('[개]')) {
        return species.slice(3);
    } else if (species.startsWith('[고양이]')) {
        return species.slice(5);
    } else if (species.startsWith('[기타축종]')) {
        return species.slice(6);
    }
};

export const getAge = (birthday: string) => {
    //현재 연도
    const currentYear = new Date().getFullYear();

    //2024?
    const year = parseInt(birthday.split('(')[0]);
    const age = currentYear - year;

    return age < 1 ? '1살 미만' : `${age}살`;
};

export const getWeight = (kg: string) => {
    const Weight = kg.split('(')[0];
    return `${Weight}kg`;
};
