import React from 'react';
import HeroSlider from '../Components/Home/HeroSlider';
import EcoStatusCards from "../components/Home/EcoStatusCards";
import useChallenges from '../Hooks/useChallenges';
import Loading from './Loading';
import Error404 from './Error404';
import ActiveChallenges from '../Components/Home/ActiveChallenges';
import RecentTips from '../Components/Home/RecentTips';

const Home = () => {


        const { challenges, loading, error }  =useChallenges();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <Error404/>
       }
       const featuredchallenges = challenges.slice(0, 8);
       console.log(featuredchallenges)
    return (
        <div>
            <HeroSlider/>
            <EcoStatusCards/>
            <ActiveChallenges/>
            <RecentTips/>
        </div>
    );
};

export default Home;


