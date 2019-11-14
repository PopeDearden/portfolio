import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import truck from '../assets/images/truck.png'
class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Taylor Kyle Dearden"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(https://lh3.googleusercontent.com/GFGnG9FfvGxyicPxdw0ikzZUeog4gnwgbPrYx-iBOyteAC7QNqzHTP10eygCeMpsSxyHvV4UF0Z3SECufag6elIocfghp4uu_MM0VVfsRv5DtR9tdyHGBkZN92-pqfuz_1P2jfQrdHW2kSduA0IJgqWVaOFs_qx_Qx1MGj8llmTIVzvbwtqDOuEC8KiHdwBRqLjS8nfvt_-kiZZkflD1O8Nqan69N3tN-gPKP1V-lAN71jSbjkrm0WzJ64kfpXmmMlWCR5381CPayVmdp5PpVAXLJ8VGJ4VLIh2mNEptYtNkLt0XQ0VBcsH2a8r54ZJ5gOcgi3dDt1xOn_tn3UNspp7K3ahuaCI04cm5zzQxLpVi6-95IQb1IiEFHaGU2IiODgBOi5iZL4K2LOj-90kMG8CZp6Iy6sXzxBTrDqZti1K1pz3atLcDi7gAY5DfDhFPzgLfE77e-c3DIk__8ma230pIfTwuLe-aGlFJv3AJgvKArShLrGwx9H1VQKjP2gfpmPWbxp867iy7W5ebuek-bVH0oKuAVSyqy6mA9-cdeVGAXO-ZWPXjQotmGtWHXeHEmWbRQgUEm6zqdwzDvsrlQLGI9sQhRoeB4QB53fCqREaj7ZVSa6l24hyHenefOXCzVgGJWw_GCX4bcBGU5NNtPtMzxOIofl35Hjt4gNMAP-08elxm4tfnlBmQ1NKEQzenJRFWLE86klDFpBWROBk_yE5uiqxGczdbuKgvQl_YDV5Nx1WF=w495-h330-no)`}}>
                            <header className="major">
                                <h3>Good Always Inc</h3>
                                <p>Combating Extreme Poverty with Job Creation, Education opportunities, and building community</p>
                            </header>
                            <Link to="/goodalways" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Technical Skills</h3>
                            <div className="grid-wrapper">
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/X11ZYGjvHneI-L1dEj-ZOp6adkmj_MuMn6I4bIol3TRLQOStyU3cSRvKsh3jRROAbMb44KOzhz7Y3-XHtbhk8U6wgL8qdWLnMblM0dJkXi0HOjROTOw1x8L-oNu7X0cHgsmL6fWwlQXxfbH7nibefelbm7sLVvOj9shAswwk5bK0nfczjWZTUtbmkfH2EqNpA-WX3Jc9TPNlAVtKI9OPL6sdKzg_minjsZM94EAGRltAQq2zV-xbmhpGMcykqF9lxF3hsctewDtAeB8ZKY44Wu06KUesBG_GGgq6TwE0XvffHvgGQqJ4brez2hYuhOU_gb0OdFDYv7DwoROMuygtSZJSolbjLXwNkMuzaWJtOcLKl-JK_7tsL1vYjhzXP0h_eVlNBGjZmxJmBX1XqWDtLm1p2BFIUeGBbwIoW9zgF1SuqALrWYq4KlA7VMYYwYiop1Xy6QYoKX1qUrpdtqnKYZtzSqHeIBge1OgGEHA8oQylzLY6qiAhhC2qZRq3skB5s9AslzzhKm71-H4bCCtWrHZW5nxqBDikeSXBVZnjXPHwn1tA-SDGyb9xxSZ9gefkZLWvOMks9FFWL8Y8-L1aoek_l_VA_0UL92C-AADqONCg8VJtc1LfhTztkzZG-tuDI2U-K9ZlEO0HUFBSz-y1utMYEuqH9elsI2Th9ntNlpQUHBhe6wfsqMEaB5lyPegpJITsyq5lQ9CXT8wWhOFHUYZq6RH5j_rgfoRWDk3BGVwLPQOL=s96-no" alt="" srcset=""/>
                                <p>HTML5</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/SwAoB0bpwthwYC2Ky1LUacNwwxwgIxCakauNz-AsbNAFvVzmSLY2ZbIGnBXbKWAlskSfMEODIgpfYgmpzN2etdguI6dM3DaniHWh495kGhMOP-wQQZ0TtgbSxRL_ObzfHfbjVmMuk383q_Wh1Ge8HSSv9BYkWMgTOMMI-u0EMUvfIbvz75Ii-yI8W3xL5oBNkYzMFoMbXRMFXoIo9D7YmmHYI3LYZLe68ktJQbVYx57Ocf5WtL4_mktnUjnx_fPCcCD6iqfzWQI3lLytvjquRzpM9zWDkphE4t5gR2JBu2fM9bGhr1bDGPu0dhXdoe46nVTzo0Jkem77FF0U1U1ZDWwYDJ4jQwV-tg4AG-uenJM3jnhy6wwlAjzZnmwjisgPsARqwb3gRS-37sQ_huxEbqhksG49gGPviBGkzn3Hl8mWmgngfm0Ve-Qz9rUQ0SCGvhB9-8bFFYeTRV-S9Ywc8PblzeYjs29jrDEilgqMElGflWqit4s1dWGbpeRux461B8Z_YDBEesnfN70FqqHZn2klchKMqRcKQ1JPWn7LnZ3KGU2rDBYjys1I05hatKoN2qtxx8Mdohj6UJSCshMsMKDJ_OqUnlGygAOwchtUd6fqfPT0YnZD5vRboDEFDbOzuoXOcfbwM8hAe-4STj2GP7WCIkSKe-KUPDyl3cN2LhyFSBEuOvOnMMkjtei1jSOb_LqDPuJHjdWwbOPbgBJQJDXWS6TZzNecIJrKOl0Gc36X6NbV=s96-no" alt="" srcset=""/>
                                <p>CSS3</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/FR-FsB2OTZYaNjPzuHiJ2kokZLU9j0M_YtwlmTzwFfj6xIfha_fdxrh7-w89IGydJYKUtOd_XZz3ulc7f017SNRWPPx-LM5IGxxSiZ9P88vjJkUBypkJCJGbRwrGObLsjXp36OhJG7b45wiitaKj6t77_4UQmWeRWzLlNo1AfId9EtL3-hA22fWBn89cmVoplyXoailSkpC1YC-rC_0qn-iZNOGEr5zf2luXhaXjv36EtsQ_a5CgbxCI3jmk2KUgqX9Ki4QbYvpqK9u0eD7nqZCEGRhTb5kkrGj0zx1bqc52bJiUeFR66f-9K6VLGxohXZMZuT5w69zYMpJsj5-8g_PAhzNW9MyLSuYWMGSe0-fwgODrVSAzwNmjc4tRp8r61ylfWeyc0Rbrdt-HvCkdt0ltshsY3uvw0UaFptwi_QGYqKOL83T8gTJw3na0-AGrEViv00GvVnjaHTkJPoAogqpwyqC6otYllwd378jWTAJvbVZaHdoE4VT4evrhIcVMyuOegWqlcv-SLWadrUJaiyYesgUdbJ403tu-XUzrjTgp4qe1TBSGB6GOQWLNOvLo-YZFv4DXn1v4_wvbUb5bM6jIoVSdQcLYlpFV3txjQ4JEWxouCqdiSNSNWQtRSsRYRTKt8XPrQozTlzjORYu-uVYmJVzYJx7jFTXXgGocGttzXjm41wLqpBruv6sTP-WTLI-DkwZx7E6-r-Ox3_Pg4a2ldC9qW7ZwNB1C6MajimRz1L5D=w128-h96-no" alt="" srcset=""/>
                                <p>Sass</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/1GiHHnTMhLkCJsWsf4P0P3rwMW8ZW1YjZQHsbGYFxWk6vHMq-k-Ks4UF4ViRFjWuXN8XIb8k4CPgPkTrkFa2TAr_dG0wr5oBlaE0pIxoAtMML-bh0YFonr5d6uYqq9zkqpvezcNPEwXOGP-qB4_mQ14ZXH3ZuxAo-mrsHl9MeDyTfWAS5UAG1_koJxoAqdzbzyF4K0LjwAtBYI6MQQKK92MYXstwH-l4rteqXvVA044lNekIyRq_g6bVMb4BZ4xPG1qRorjVZRX6ODhYEmUfyhiaDyIhIhE1DRwNWLbC_O03fwDBBQhm3tV6sRQz9gK-dFfN2ecEdQC704wNuXAqBWmGnXVrICUglpWWJAo0mJ-ynBgTCMSrdionLl8oq7kxCsIB65FH3Ran55Au5tiy5iJfWc7Q3GTegmKoZ_Cb2K7w8AKM-Vio57oMWOxnEOJzYDUYt_EpmGUMnr9BwSEGKjItbqY8ZopqyL_l6HDPG1nWdH1TAIuUvMkovd40mRI_HMWPtaDWaqwJX-aQ7kpoVUEEvksRSw_S1GS50_K9QbrQpFt8jrKktLANskQtXFhpwV5-QVyLBLss0n1WjJYECLmPpwyEgB8GsGSgaVd5PQTBhKv1yZZmJOnkU7vIu3IfoEBXm5r1qL1qPr96iXmnO0mzcaYaL3swJYYJ06kpJRnHTWY-_J7GlAC0oLelpYK6pfmfU7rhasSjo_j66a9n1Cg1D9bwVvFV8mIhaOMbJBaVl5FY=s96-no" alt="" srcset=""/>
                                <p>Javascript</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/Yn4LVeQhSdSi1GibIGhTuqKEhwHk6M42l7ZoWOvS5vQkWssY9Vti7AjATvfYhtv1aCN2bo6W28omwhnc0auR4loV17Nk3ciqKUL3exp9cGzzLJCaV8lzBXhLuJj_gYJGcT241ywyp1zzWr39FChAdriiK-iFm_Hy2av-XXt0pG7Szlzmv6RPTmW6HWVAOtR5JlFmndYg4zxR_lJ5sRnIeHix49ye00RE-0_H3myJap6Cmj-x9q6fd04Z-B-SAGd2v4SsYsiQUUuALPuZRf-Q0or3Q0J6dqBW7sLD_IWlj7lT8QMJlVDIYKZzfyK7tDFySGWbImq5qi-AdaSfzFHAw4QJw5pVm4P_HVZwE-y8w-aNzV37Nf0hvTUY49unNvEh25OmBmkM8BpSNZVqMmToNKXp0apyZHuwzWhl8E9S1fKsSduCb8TeSNuO-e1b8J67nHvfQmmK1cyTV7Q6jmeNPw2ZMUGRg6thsmqoVPNIJ6Ae2x30wR0e-V7t_j7naWoa0jIVcM1q4ExnQT-A37moF8eDVmTw4s6WiDyE-c5CVFXrz17OkJaYHsGTwnLnEfrhnD7c8DEN3Sc2mzj4WSgHA1zj6JnPJTwr17IRKrNDP4LUFQ6CtZ8CTnMtYS94ZFUyxioWwUGFuadaD1lcNeboT2IfnFmMoHjmybAvHttmD3-nyuE738INSE9-5qJGklyqIqOYXcrwGER72AuJsRwJua6VqXDzUxnObZv0z_9BUokeJ38j=s100-no" alt="" srcset=""/>
                                <p>React.js</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/4dqGx0eigVprMwYmKh_jn95whP85o3LiqCjay6bOSqmDkMsRaQnBXIQQAI94j3xSPGeL8R1YVv-o6VITx0sEHdA02Cv2jPnXJ_JpsRNZAiExDhV0G375jA1KZ728cCzKfwyRHIKMPkrbMkTdgXBXld9wQuFETOzc_Cme-VgrGNQvnRCUJuRVHcTUrnA1ofaO48l-KIB_pnhQQNPo9MGjj9ZzFP_Iw5umUmzQkdbPtZBNqCMjRP2uK7AS0y4dBeq_1cPbiHleeZwiDiuHeBBrtfdz9YsoZ_Pyx4CcoHHUYI-biegpML6yZ8vNz1QfHBWrkd9fhtsMMbCogG1ereDUdVnaxf1VI0959X1eSCnoDYMIbjJORvkvW2Y59jVYfs2Gd42dncjJ_ciQqDGXnsJzipHZ_vX7sInWWEE9XiVN7uYlpKJPUgyWw7cpl33eHnBkLV9bJh8EdisacTTAI8gFU18dxwidUunkeW2ouj3bdLZ8gVOJ2xSM_m4mbsjRVhERCQIJ3rfsPzA8v4b0cqqNwwRLCW3hiDoaiUxq7XE8Obfzv1meVcaCwDJOV4ZQiYlHxLQDq15Pb6EDNhCLrXrd_gWBsRKGDFL0ZYKKZAUeJhu4IqFfqlhJ-OPeNKM8zHKe1-IEbzQO2dHdnJ91GanFiBUbkWa5J1YaqDL93KAoJf7k6hAXOZ59ovPvrB6LidESc0-sRdp9lbmR37eR2n4Gl65V97pHQL8wr3bYjWRo457klu60=s96-no" alt="" srcset=""/>
                                <p>Node.js</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/R7kkoxLey9x2JEu0ASl1QGrxnRPIn-3rNi9mQ6Ws6P-ZYAAQoQ_rA4BmnNSCVy5Hp1cuPba4wIQJ3oQXy3rCyZFiCHtlgGehyDxNPUEYHn9NZ3uFBRSJsAB6-uunIKXTxZYXFCscF0XcogGo7o8vhn4I39xufyAU1NlrIFcYvmHk87SWj0-QXgFEz_Sv1-pdN-SkDXBMOHM2KiWyiGbHuhYT2yg_n_i9dTlAcUbzpGZUGayZVOiMGurqUzasQPN0bdRy6gKhLMeh3AtSldTPm5qCFG6tyaAYcAYICXbO5yzZnRc4EzCLXupuNgBfWLjFVDYh3F7eRX6zdSJYwgV9gjDbzdW9Hj10hbIiUo83C8e93hK-EeGHwMs5XQyZBzYtN4z1kxeK42mYUVeCxcbZ7cGTAseYK3DhyqXWOqZjoO6_Mi3VGxm46VkDHVdbXvPGFmJrh9dUkCaK7edTDUtA6ZJN7ndow0Eiy0BwiTNpBTlOoyTyhTHcZdiE8BfsGsZbFDxlEWWukiuqSm1yyKvGE_pu6JznexWMgb0l6ee__bXcXXmn0maiyIEaff1FrdctGxVZb3yiTrHK4IAC_6r5bIggIf3VREGi4cOOYjUT9WV1866HdATdJ1h2xz4O0iIbcXP59QqM4Lp7O6HalOksA8BKW7Boa2vA0wxMwIogLYvTKNuL4LMc7kPRKqtsDV-QVxqLlFKrarXxW9RgcTA0KG6PbI1SxyqP6nKeJUOK83i-Bzst=s96-no" alt="" srcset=""/>
                                <p>PostgreSQL</p>
                                </div>
                                <div className="col-3">
                                <img src="https://lh3.googleusercontent.com/EREoNH8QmOYrQ9ouz3m972u4AyGZSrY5yU3UI-jYNGxFIJI3Hni6nOUI-pi9bpayi9ss_bUVT2f7rsnM86e3R2S5c6ES5xMfhdkD7ll09bmkGqcwpaeXs4AusCZtlulIHiW8b2GikBqUTus3eww4Nu-1KqcolRKyo-R24py23yfAfqDcX1vUbwVn9qkocBh2YwVi1jpueYBV-xaG_H08-r4wSqwqKeKFn3rL9INpUZ36pQXZKqIRtNS8KHPkk9Rp00alHv-JYRAk03fK17Z45Esaw_QKEivuF1WOZT2IDawEpsLAM-5mqG6D1Fv2M1Uyz8IQ3W8zNxV6mSMRzXzyPVFKM6STgztbYvEwa0hOm9IeRLYmhq3brRDV8KpWaZzBw_7PJO7GZdDhrmZ-S2CMeKyLbPL5iRbkllMqrCiXAlEjJXPUgqsJbQtUqzRaanYKrXYeps_2qIoKJWrAHZFj3k39h6MOAUAr5NU0y4DoQ-dWkUXvMRIRVlkByo3oePlzW2J08cWAtB_lA0oe7nkLK8oIvjUu0CXbGsYyZJw6Iq2CxKavY2FznF3R4lB3yJ2Sk089KcJ5sCHbzjReQKLy0K6WhxB-OLoqTWddtikmV7XMLcZUpbe3EE1hlf85WD-v2gBcbLpoN4H3GLWuLPP8sXiTocc_DUBx65EUjId3krCE08UfG71vxrbTsjcz1XIoOtxody92FR_sAu7qQY8kaiHPdY8sQqpBuOpHxqmx3RV5hK0y=s96-no" alt="" srcset=""/>
                                <p>Git</p>
                                </div>
                            </div>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(https://lh3.googleusercontent.com/fI7lMGRR_atr2SsGQpU55bKZNEEYOFvjgwMvFEaLm01dHt-t4DkzGnO07rIq-wTwDp1G_I7k-7YyOgUolcpmTyHLUSNeOTaifygqrKgYvheHw_8-gzyS4hi3i3Dm_KCR7E6COeM6WBiJjesmSlUfRrfVHS8AorL3eaf8CsxqiCzLOBxAtuTMopm6M7N6LyAMvpNQZytXlq2-qtjp5O7IAiSsitCkLMnOhGiuN8wUw-NXd9SwU2kNh2xGZe-us78unBNNT83s4No9KrcvO1Vj-yy1L7-OjDtB0CBrcIJRDruyFQ9P9ZjGmt8xMP3lvEUS-7gT2R8GKE7_HCGjL9jduvZLjZ8QowG7nqFggpMTeVW4H2HZmo_XLhqDLiBlali9eFovUFCND_3y_--Ue09oa14_5raB-qoPxYaMV_BwYUF_NOrJiKe0sAsgmbiq9SW1WN_5rIL2MNX-wQhDrjNmRsjcAVSVqCDEMlhNqbHIawj9WPj8zTkIhxXyqkdZ2mQDNpXR2MdQbGWd0zDWAa2MRksJi50gn7j_oDv04yB2mOGM3JQxDzzJUco3H1xIz75qxw2GN_0oEtyxaOSv9_I-YD53SLsZkJg07wGgZUY3DNY50VxvLTLqjdB4xRajIZiNNGEOz-6pVUgQKHCNfLsiotAFcDuYLFKj5zmBLh-anffh-J7VjN-366f2RDHuDIIVDolEzsbBS2O2N8WStSetljYRLLG_il4Ox-CcJi1GKKliIZnS=w1388-h888-no)`}}>
                            <header className="major">
                                <h3>Project: Technoglyph</h3>
                                <p>A Petroglyph Analysis Database</p>
                            </header>
                            <Link to="/technoglyph" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${truck})`}}>
                            <header className="major">
                                <h3>Project: What the truck?</h3>
                                <p>A Food Truck Event Tracking Application (Mobile Only)</p>
                            </header>
                            <Link to="/truck" className="link primary"></Link>
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                        
                            </header>
                            <h1>About Taylor</h1>
                            <p>
                                I'm Taylor Dearden, a full stack web developer, social entrepreneur, and passionate about making a difference in the lives of those with less opportunity. 
                                I've always known the Tech world is where I belong and in August 2019 I made that a reality by attending Dev Mountain. I love problem solving and discovering answers to complex questions.  
                            </p>
                            <p>
                                My dream is to help individuals who are living in poverty to develop tech skills to catch up with the rest of the world. I believe technology is our best asset to combat poverty.
                                                               
                            </p>
                            </div>
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex