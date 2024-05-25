import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Home = () => {
  const loggedIn = getLoggedInUser();

  return (
    <section className="home">
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'} // Fixed the capitalization of firstName
            subtext="Seamless Banking Integration."
          />

          <TotalBalanceBox
            accounts={[]} 
            totalBanks={1}
            totalCurrentBalance={1250.35}
          
          />

        </header>
      </div>
        <RightSidebar 
          user={loggedIn}
          transactions= {[]}
          banks={[{ currentBalance: 123.50}, {currentBalance: 500.50}]}
        />
    </section>
  );
};

export default Home;
