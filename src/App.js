import { Download, Features, SectionWrapper } from './components';

import assets from './assets';
import styles from './styles/Global';

function App() {
  return (
    <>
      <SectionWrapper
        title='Your own store of ProNef NFTs. Start selling & growing'
        description='Buy, store, collect NFTs exchange & earn crypto. Join 25+ million people using ProNef Marketplace'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment'
        description="ProNef is build using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='Creative way to showcase a store'
        description='The app contains two screens. The first screen lists all NFTs while the second shows the details of a specific NFT'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by <span className='font-bold'>Samador</span>{' '}
        </p>
      </div>
    </>
  );
}

export default App;
