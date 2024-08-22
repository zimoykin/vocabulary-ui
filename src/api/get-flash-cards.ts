import apiClient from './apiClient';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchAssesment = async () => {
    // const result = await apiClient.get(`${API_BASE_URL}/assesment`);
    return [
        { de: 'Hund', eng: 'Dog', rus: "Собака", option1: 'Самолет', option2: 'Собака', option3: 'Человек', option4: 'Талант' },
        { de: 'Eighentlich', eng: 'Well', rus: "Собственно", option1: 'Телефон', option2: 'Честный', option3: 'Собственно', option4: 'Талант' },
        { de: 'Handy', eng: 'Mobile', rus: "Телефон", option1: 'Телефон', option2: 'Собака', option3: 'Король', option4: 'Песня' },
        { de: 'Tanzen', eng: 'Dance', rus: "Танцевать", option1: 'Молния', option2: 'Собака', option3: 'Танцевать', option4: 'Костер' },
        { de: 'Arbeiten', eng: 'Work', rus: "Работать", option1: 'Разные', option2: 'Идиот', option3: 'Корабкаться', option4: 'Работать' },
        { de: 'Konnen', eng: 'Can', rus: "Мочь", option1: 'Спать', option2: 'Смотреть', option3: 'Идти', option4: 'Мочь' },
    ];
};