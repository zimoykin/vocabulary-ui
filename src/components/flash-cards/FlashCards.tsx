import React, { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssesment } from '../../api/get-flash-cards';
import { setAssesment } from '../../features/assesment/assesmentSlice';
import './FlashCards.css';
import { toast } from 'react-toastify';

const FlashCards: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const assesmentSelector = useSelector((state: RootState) => state?.assesment?.assesment);
    const [answer, setAnswer] = useState<'wrong' | 'correct' | null>(null);
    const [countFailed, setCountFailed] = useState(0);

    const [progress, setProgress] = useState(0);

    const checkAnswer = (option: 'option1' | 'option2' | 'option3' | 'option4') => {
        const answer = assesmentSelector ? assesmentSelector[progress][option] : '';
        if (assesmentSelector && (assesmentSelector[progress]?.eng === answer ||
            assesmentSelector[progress]?.rus === answer)) {
            //reset wrong answer counter 
            setCountFailed(0);
            if (progress + 1 < assesmentSelector?.length) {
                setAnswer('correct');
                setTimeout(() => {
                    setProgress(progress + 1);
                    setAnswer(null);
                }, 1000);
            }
            else {
                setAnswer('correct');
                setTimeout(() => {
                    setProgress(0);
                    setAnswer(null);
                }, 1000);
            }
        } else {
            if (countFailed < 4) {
                setAnswer('wrong');
                setCountFailed(countFailed + 1);
                setTimeout(() => {
                    setAnswer(null);
                }, 1000);
            } else {
                if (assesmentSelector)
                    toast.warn(
                        `${assesmentSelector[progress]?.rus} / ${assesmentSelector[progress]?.eng}`
                    );
            }
        }
    };

    useEffect(() => {
        const getAssesment = async () => {
            if (assesmentSelector) {
                dispatch(
                    setAssesment(assesmentSelector)
                );
            } else {
                try {
                    // debugger;
                    const data = await fetchAssesment();
                    dispatch(setAssesment(data));
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            }
        };

        getAssesment();
    }, [dispatch]);

    return (
        <div>
            <div className='container'>
                <div className={answer === 'wrong' ? 'question rosa-bg' : answer === 'correct' ? 'question green-bg' : 'question'}>
                    {assesmentSelector?.length ? assesmentSelector[progress].de : 'nothing to say'}
                </div>

                <div className='option-row'>
                    <button className='option-small lila-bg'
                        onClick={() => checkAnswer('option1')}
                    >
                        {assesmentSelector?.length ? assesmentSelector[progress].option1 : 'nothing to say'}
                    </button>
                    <button className='option-large green-bg'
                        onClick={() => checkAnswer('option2')}>
                        {assesmentSelector?.length ? assesmentSelector[progress].option2 : 'nothing to say'}
                    </button>
                </div>
                <div className='option-row'>
                    <button className='option-large peach-bg'
                        onClick={() => checkAnswer('option3')}>
                        {assesmentSelector?.length ? assesmentSelector[progress].option3 : 'nothing to say'}
                    </button>
                    <button className='option-small blue-bg'
                        onClick={() => checkAnswer('option4')}>
                        {assesmentSelector?.length ? assesmentSelector[progress].option4 : 'nothing to say'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FlashCards;