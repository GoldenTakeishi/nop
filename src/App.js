import Logo from './assets/svg/logo.svg';
import Checkmark from './assets/svg/checkmark.svg';
import Illustration from './assets/svg/illustration.svg';
import SecondBackground from './assets/svg/second.svg';
import './styles/App.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FreeDoge from './assets/svg/freedoge.svg';
import Lock from './assets/svg/lock.svg';
import Cross from './assets/svg/cross.svg';
import ChartUp from './assets/svg/chartup.svg';
import Dollar from './assets/svg/dollar.svg';
import Cup from './assets/svg/cup.svg';
import Trash from './assets/svg/trash.svg';
import Shield from './assets/svg/shield.svg';
import LoudSpeaker from './assets/svg/loudspeaker.svg';
import Empty from './assets/svg/empty.svg';
import Telegram from './assets/svg/telegram.svg';
import Twitter from './assets/svg/twitter.svg';
import { useRef } from 'react';

import FaQ from './component/FaQ.js';

import Helmet from 'react-helmet';
import { ReactSEOMetaTags } from 'react-seo-meta-tags';

const App = () => {
  const featuresRef = useRef(null);
  const roadmapRef = useRef(null);

  const handleClickContract = () => {
    navigator.clipboard.writeText('0xdb8d30b74bf098af214e862c90e647bbb1fcc58c');
    toast('Copied contract address');
  };

  const handleClickTelegram = () => {
    navigator.clipboard.writeText('https://t.me/freedogecoinBSC');
    toast('Copied Telegram');
  };

  const siteMetadata = {
    url: 'https://freedoge.io',
    title:  'FreeDoge',
    datePublished: '2019-10-06T13:56:03.123Z',
    description: 'FreeDoge',
    language: 'en-US',
    image: 'http://freedoge.io/image.png',
    author: {
      email: 'person@gmail.com',
      name: 'John Smith',
      image: 'http://john.me/my-face.jpg',
    },
    site: {
      siteName: 'IMDb',
      searchUrl: 'https://www.google.com/search?q=',
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">
            <img src={Logo} />
          </div>
          <div className="navbar__items">
            <a onClick={() => featuresRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' })}>Features of Freedoge</a>
            <a href="#">Whitepaper</a>
            <a onClick={() => roadmapRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })}>Roadmap</a>
            <a href="#">Audit</a>
          </div>
        </div>
        <div className="navbar__right">
          <button className="navbar__button">
            Join our telegram
          </button>
        </div>
      </div>
      <div className="first__content">
        <div className="first__content__left">
          <span className="first__content__rainbow">
            The first DOGE reflection token!
          </span>
          <span className="first__content__black">
            Hold <span className="freedoge__text">$FREEDOGE</span>.
          </span>
          <span className="first__content__black">
            Earn <span className="freedoge__text">$DOGE</span> passively!
          </span>
          <div className="first__content__checkmarks">
            <span className="first__content__checkmark">
              <img src={Checkmark} />
              12K+ Telegram members
            </span>
            <span className="first__content__checkmark">
              <img src={Checkmark} />
              14K+ Holders
            </span>
            <span className="first__content__checkmark">
              <img src={Checkmark} />
              $30M+ MC from fair launch
            </span>
          </div>
          <div className="first__content__buttons">
            <button>Buy on PancakeSwap</button>
            <button>Poo Chart</button>
            <button>Dextools</button> 
          </div>
        </div>
        <div className="first__content__right">
          <img className="first__content__illustration" src={Illustration} />
        </div>
      </div>
      <div className="contacts">
        <div className="contact">
          <span className="contact__title">Contract address</span>
          <span className="contact__value" onClick={handleClickContract}>
            0xdb8d30b74bf098af214e862c90e647bbb1fcc58c
          </span>
        </div>
        <div className="contact">
          <span className="contact__title">Telegram</span>
          <span className="contact__value" onClick={handleClickTelegram}>
            https://t.me/freedogecoinBSC
          </span>
        </div>
      </div>
      <div className="second__content">
        <span className="breadcrumb">
          Home {">"} What is <span className="freedoge__text">$FREEDOGE</span>?
        </span>
        <span className="second__content__title">
          About us
        </span>
        <span className="second__content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
        </span>
        <img src={SecondBackground} className="second__background" />
      </div>
      <div className="features" ref={featuresRef}>
        <div className="feature">
          <div className="feature__logo">
            <img src={ChartUp} />
          </div>
          <span className="feature__title">7% Redistribution In <span className="freedoge__text">$FREEDOGE</span></span>
          <span className="feature__text">
            7% of every buy/sell is taken and redistributed to all holders. Hold <span className="freedoge__text">$FREEDOGE</span> tokens, earn DOGE. Minimum 200,000 tokens
          </span>
        </div>
        <div className="feature">
          <div className="feature__logo">
            <img src={Dollar} />
          </div>
          <span className="feature__title">Auto Paid Every 60 Minutes</span>
          <span className="feature__text">
            For the first time ever, you don’t need to claim your earned $DOGE. It’s automatically sent to your wallet every 60 minutes.
          </span>
        </div>
        <div className="feature">
          <div className="feature__logo">
            <img src={Cup} />
          </div>
          <span className="feature__title">3% Auto Liquidity Pool</span>
          <span className="feature__text">
            3% of every transaction is transformed into liquidity for Pancakeswap. It's automatic and helps create a price floor (stability).
          </span>
        </div>
        <div className="feature">
          <div className="feature__logo">
            <img src={Trash} />
          </div>
          <span className="feature__title">Anti-Dump & 1% Sell Fee</span>
          <span className="feature__text">
          Sells are restricted to less than 0.1% of the total supply + extra 1% fee is applied to all sells. This will allow us to reduce swing-trading and break whales' control. 
          </span>
        </div>
        <div className="feature">
          <div className="feature__logo">
            <img src={Shield} />
          </div>
          <span className="feature__title">Secured By Unicrypt</span>
          <span className="feature__text">
           Initial Liquidity Provided will be locked with Unicrypt for more than a year. The contract is being audited (In progress) 
          </span>
        </div>
        <div className="feature">
          <div className="feature__logo">
            <img src={LoudSpeaker} />
          </div>
          <span className="feature__title">Massive Marketing Plan</span>
          <span className="feature__text">
            5% of every transaction is allocated to Marketing in $DOGE (swapped to $DOGE in real time to avoid dumps). So we can fuel the most ambitious projects and reward our active community. 
          </span>
        </div>
      </div>
      <div className="third__content">
        <div className="third__content__left">
          <span className="breadcrumb">Home {">"} Tokenomics</span>
          <span className="third__content__title">Our Tokenomics</span>
          <div className="third__content__checkmarks">
            <span className="third__content__checkmark">Fair Launched - Zero Bots</span>
            <span className="third__content__checkmark"><img src={Cross} />No private sale</span>
            <span className="third__content__checkmark"><img src={Cross} />No whitelist</span>
            <span className="third__content__checkmark"><img src={Cross} />No pre-sale</span>
          </div>
          <span className="third__content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</span>
          <div className="third__content__buttons">
            <button className="third__content__button"><img src={Lock} />Locked liquidity</button>
          </div>
        </div>
        <div className="third__content__right">
          <span className="third__content__right__title">Transaction fees</span>
          <div className="third__content__right__text">
            Buy & Sell Tax: 15%
          </div>
          <div className="third__content__right__text">
            7% is used to purchase $DOGE which is automatically paid out in dividends to holders 
          </div>
          <div className="third__content__right__text">
            5% is split between the buy back mechanism and the team/marketing fund. Marketing Fund which is 1.5% can be used in extreme circumstances to correct market volatility.
          </div>
          <div className="third__content__right__text">
            Liquidity Locked: 100%
          </div>
          <div className="third__content__right__text">
            Total Supply: 100 000 000 000 
          </div>
        </div>
      </div>
      <div className="roadmap" ref={roadmapRef}>
        <span className="roadmap__title">Our <span>road</span> map</span>
        <div className="roadmap__steps">
          <div className="roadmap__step">
            <span className="roadmap__step__number">1</span>
            <span className="roadmap__step__title">First Steps</span>
            <div className="roadmap__step__requirements">
              <span className="roadmap__step__requirement"><img src={Checkmark} />Freedoge is born</span>
              <span className="roadmap__step__requirement"><img src={Checkmark} />Website launched</span>
              <span className="roadmap__step__requirement"><img src={Checkmark} />Whitepaper released</span>
              <span className="roadmap__step__requirement"><img src={Checkmark} />Brand development</span>
              <span className="roadmap__step__requirement"><img src={Checkmark} />Socials created</span>
              <span className="roadmap__step__requirement"><img src={Checkmark} />1K+ Telegram members</span>
            </div>
          </div>
          <div className="roadmap__step">
            <span className="roadmap__step__number">2</span>
            <span className="roadmap__step__title">Learning to Speak</span>
            <div className="roadmap__step__requirements">
              <span className="roadmap__step__requirement"><img src={Checkmark} />Influencers</span>
              <span className="roadmap__step__requirement"><img src={Checkmark} />PooCoin Ads</span>
              <span className="roadmap__step__requirement"><img src={Empty} />DexTools Trending</span>
              <span className="roadmap__step__requirement"><img src={Empty} />Website Revamp</span>
              <span className="roadmap__step__requirement"><img src={Empty} />Community Building</span>
              <span className="roadmap__step__requirement"><img src={Empty} />5K+ Telegram members</span>
            </div>
          </div>
          <div className="roadmap__step">
            <span className="roadmap__step__number">3</span>
            <span className="roadmap__step__title">Development Stages</span>
            <div className="roadmap__step__requirements">
              <span className="roadmap__step__requirement"><img src={Empty} />CoinMarketCap</span>
              <span className="roadmap__step__requirement"><img src={Empty} />CoinGecko</span>
              <span className="roadmap__step__requirement"><img src={Empty} />Audit completed</span>
              <span className="roadmap__step__requirement"><img src={Empty} />Listing CEX Hotbit/Whitebit/Gate.io</span>
              <span className="roadmap__step__requirement"><img src={Empty} />Influencer marketing push</span>
              <span className="roadmap__step__requirement"><img src={Empty} />$FREEDOGE Dashboard</span>
            </div>
          </div>
        </div>
      </div>
      <div className="coins">
        <div className="coins__left">
          <span className="coins__title">
            Lorem ipsum dolor sit.
          </span>
          <span className="coins__item">
            Date of birth
          </span>
          <span className="coins__item">
            Fees Reward
          </span>
          <span className="coins__item">
            Passive Doge
          </span>
          <span className="coins__item">
            Help the Dog
          </span>
          <span className="coins__item">
          MarketCap
          </span>
        </div>
        <div className="coins__right">
          <div className="coin">
            <img className="coin__image" src={FreeDoge} />
            <span className="coin__title"><span>$</span>FREEDOGE</span>
            <span className="coin__item">23/08/2019</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
          </div>
          <div className="coin">
            <img className="coin__image" src={FreeDoge} />
            <span className="coin__title"><span>$</span>FREEDOGE</span>
            <span className="coin__item">23/08/2019</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
          </div>
          <div className="coin">
            <img className="coin__image" src={FreeDoge} />
            <span className="coin__title"><span>$</span>FREEDOGE</span>
            <span className="coin__item">23/08/2019</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
          </div>
          <div className="coin">
            <img className="coin__image" src={FreeDoge} />
            <span className="coin__title"><span>$</span>FREEDOGE</span>
            <span className="coin__item">23/08/2019</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
          </div>
          <div className="coin">
            <img className="coin__image" src={FreeDoge} />
            <span className="coin__title"><span>$</span>FREEDOGE</span>
            <span className="coin__item">23/08/2019</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
            <span className="coin__item">Lorem ipsum</span>
          </div>
        </div>
      </div>
      <div className="faqs">
        <span className="faqs__title">FAQ</span>
        <FaQ question="What is Free Doge Token?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit." />
        <FaQ question="What is Free Doge Token?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit." />
        <FaQ question="What is Free Doge Token?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit." />
        <FaQ question="What is Free Doge Token?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit." />
        <FaQ question="What is Free Doge Token?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit." />
      </div>
      <div className="footer">
        <div className="footer__left">
          <img className="footer__logo" src={Logo} />
          <span className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
          <div className="footer__socials">
            <img className="footer__social" src={Twitter} />
            <img className="footer__social" src={Telegram} />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__column">
            <span className="footer__title">LOREM</span>
            <div className="footer__links">
              <a href="#" className="footer__link">Lorem ipsum</a>
              <a href="#" className="footer__link">Lorem ipsum</a>
            </div>
          </div>
          <div className="footer__column">
            <span className="footer__title">LOREM</span>
            <div className="footer__links">
              <a href="#" className="footer__link">Lorem ipsum</a>
              <a href="#" className="footer__link">Lorem ipsum</a>
            </div>
          </div>
          <div className="footer__column">
            <span className="footer__title">LOREM</span>
            <div className="footer__links">
              <a href="#" className="footer__link">Lorem ipsum</a>
              <a href="#" className="footer__link">Lorem ipsum</a>
            </div>
          </div>
        </div>
      </div>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{ ...siteMetadata }}
      />
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        draggable
        pauseOnHover
        pauseOnFocusLoss
      />
    </div>
  );
}

export default App;
