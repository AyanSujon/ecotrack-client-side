import React from 'react';
import HeroSlider from '../Components/Home/HeroSlider';
import useChallenges from '../Hooks/useChallenges';
import Loading from './Loading';
import Error404 from './Error404';
import ActiveChallenges from '../Components/Home/ActiveChallenges';
import RecentTips from '../Components/Home/RecentTips';
import UpcomingEvents from '../Components/Home/UpcomingEvents';
import WhyGoGreen from '../Components/Home/WhyGoGreen';
import HowItWorks from '../Components/Home/HowItWorks';
import Newsletter from '../Components/Newsletter';
import PopularChallenges from '../Components/Home/PopularChallenges';
import ChallengeCategories from '../Components/Home/ChallengeCategories';
import WeeklyGoal from '../Components/Home/WeeklyGoal';
import FactsAndMyths from '../Components/Home/FactsAndMyths';
import EcoStatusCards from '../components/Home/EcoStatusCards';

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
            <WeeklyGoal/>
            <FactsAndMyths/>
            <ActiveChallenges/>
            <RecentTips/>
            <UpcomingEvents/>
            <PopularChallenges/>
            <ChallengeCategories/>
            <WhyGoGreen/>
            <HowItWorks/>
            <Newsletter/>
        </div>
    );
};

export default Home;


