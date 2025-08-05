import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Gnb.css';

const Gnb = () => {
  const gnbRef = useRef();
  const lineRef = useRef();

  const handleMouseEnterDepth1 = (e) => {
    const submenu = e.currentTarget.querySelector('.depth2');
    const submenuHeight = submenu.offsetHeight;
    gnbRef.current.style.height = 80 + submenuHeight + 'px';
    lineRef.current.style.dipaly = 'block';
  };
  // e.currentTarget : 이벤트 리스너가 등록된 대상
  // e.target : 실제 이벤트가 발생하게 된 원인
  const handleMouseLeaveGnb = () => {
    gnbRef.current.style.height = '80px';
    lineRef.current.style.dipaly = 'none';
  };

  return (
    <div id="Gnb" ref={gnbRef}>
      <h1 className="logo">
        <Link to="">
          <img src="/images/metro_logo.png" alt="메트로시티" />
        </Link>
      </h1>
      <nav className="gnb" onMouseLeave={handleMouseLeaveGnb}>
        <ul className="depth1">
          <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>EXCLUSIVE</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">HANDBAG</Link>
                    </li>
                    <li>
                      <Link to="">JEWELRY</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>WOMEN</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">BAG</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">BEST</Link>
                          </li>
                          <li>
                            <Link to="">TOTE BAG</Link>
                          </li>
                          <li>
                            <Link to="">SHOULDER BAG</Link>
                          </li>
                          <li>
                            <Link to="">CROSS BAG</Link>
                          </li>
                          <li>
                            <Link to="">MINI BAG</Link>
                          </li>
                          <li>
                            <Link to="">CLUTCH BAG</Link>
                          </li>
                          <li>
                            <Link to="">BACK PACK</Link>
                          </li>
                          <li>
                            <Link to="">SHOWPIECE</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/product/list?main_cate=WOMEN&sub_cate=SLG">
                        SLG
                      </Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">BEST</Link>
                          </li>
                          <li>
                            <Link to="/product/list?main_cate=WOMEN&sub_cate=SLG&detail_cate=WALLET">
                              WALLET
                            </Link>
                          </li>
                          <li>
                            <Link to="">CARD WALLET</Link>
                          </li>
                          <li>
                            <Link to="">OTHER</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="">SHOES</Link>
                    </li>
                    <li>
                      <Link to="">RTW</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">OUTER</Link>
                          </li>
                          <li>
                            <Link to="">TOP</Link>
                          </li>
                          <li>
                            <Link to="">PANTS</Link>
                          </li>
                          <li>
                            <Link to="">SKIRT</Link>
                          </li>
                          <li>
                            <Link to="">ONE PIECE</Link>
                          </li>
                          <li>
                            <Link to="">ACC</Link>
                          </li>
                          <li>
                            <Link to="">SHOWPIECE</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="depth2-img">
                  <ul>
                    <li>
                      <Link>
                        <img src="/images/gnb-women1.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-women2.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-women3.jpg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>MEN</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">BAG</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">BEST</Link>
                          </li>
                          <li>
                            <Link to="">BACK PACK</Link>
                          </li>
                          <li>
                            <Link to="">CLUTCH BAG</Link>
                          </li>
                          <li>
                            <Link to="">CROSS BAG</Link>
                          </li>
                          <li>
                            <Link to="">TOTE BAG</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="">SLG</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">BEST</Link>
                          </li>
                          <li>
                            <Link to="">WALLET</Link>
                          </li>
                          <li>
                            <Link to="">CARD CASES</Link>
                          </li>
                          <li>
                            <Link to="">KEY HOLDERS</Link>
                          </li>
                          <li>
                            <Link to="">TECH ACCESSORIES</Link>
                          </li>
                          <li>
                            <Link to="">BELT</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="">SHOES</Link>
                    </li>
                    <li>
                      <Link to="">RTW</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">OUTER</Link>
                          </li>
                          <li>
                            <Link to="">TOP</Link>
                          </li>
                          <li>
                            <Link to="">PANTS</Link>
                          </li>
                          <li>
                            <Link to="">ACC</Link>
                          </li>
                          <li>
                            <Link to="">SHOWPIECE</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="depth2-img">
                  <ul>
                    <li>
                      <Link>
                        <img src="/images/gnb-men1.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-men2.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-men3.jpg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>JEWELRY</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">BEST</Link>
                    </li>
                    <li>
                      <Link to="">ALL</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">RING</Link>
                          </li>
                          <li>
                            <Link to="">EARRINGS</Link>
                          </li>
                          <li>
                            <Link to="">NECKLACE</Link>
                          </li>
                          <li>
                            <Link to="">BRACELET</Link>
                          </li>
                          <li>
                            <Link to="">HAIR ACC</Link>
                          </li>
                          <li>
                            <Link to="">OTHER</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="">CUSTOM MADE</Link>
                    </li>
                    <li>
                      <Link to="">COLLECTION</Link>
                      <div className="depth3-menu">
                        <ul>
                          <li>
                            <Link to="">M-BASIC</Link>
                          </li>
                          <li>
                            <Link to="">ANELLO</Link>
                          </li>
                          <li>
                            <Link to="">CORTE</Link>
                          </li>
                          <li>
                            <Link to="">PSYCHE</Link>
                          </li>
                          <li>
                            <Link to="">LUCE</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="depth2-img">
                  <ul>
                    <li>
                      <Link>
                        <img src="/images/gnb-jewelry1.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-jewelry2.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-jewelry3.jpg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>WATCH</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">BEST</Link>
                    </li>
                    <li>
                      <Link to="">LEATHER</Link>
                    </li>
                    <li>
                      <Link to="">METAL</Link>
                    </li>
                    <li>
                      <Link to="">ETC</Link>
                    </li>
                  </ul>
                </div>
                <div className="depth2-img">
                  <ul>
                    <li>
                      <Link>
                        <img src="/images/gnb-watch1.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-watch2.jpg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/images/gnb-watch3.jpg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>COLLECTION</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">FASHION</Link>
                    </li>
                    <li>
                      <Link to="">JEWELRY</Link>
                    </li>
                    <li>
                      <Link to="">TIMEPIECE</Link>
                    </li>
                    <li>
                      <Link to="">RTW</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>ABOUT M</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">SIGNATURE</Link>
                    </li>
                    <li>
                      <Link to="">BRAND HISTORY</Link>
                    </li>
                    <li>
                      <Link to="">METROCITY NEWS</Link>
                    </li>
                    <li>
                      <Link to="">ARCHIVE</Link>
                    </li>
                    <li>
                      <Link to="">NOTICE</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
            <Link to="">
              <span>MEMBERSHIP</span>
            </Link>
            <div className="depth2">
              <div className="depth2-inner">
                <div className="depth2-menu">
                  <ul>
                    <li>
                      <Link to="">ON-LINE</Link>
                    </li>
                    <li>
                      <Link to="">OFF-LINE</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <span className="line" ref={lineRef}></span>
    </div>
  );
};

export default Gnb;
