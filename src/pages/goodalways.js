import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Good Always®</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Good Always®</h1>
                </header>
                <div className="content">
                    <p>Good Always is a social enterprise dedicated to combating extreme poverty around the world.</p>
                </div>
            </div>
        </section>
        {/* <BannerLanding /> */}

        <div id="main">
            {/* <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Good Always Operations Officer</h2>
                    </header>
                    <p> </p>
                </div>
            </section> */}
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src="https://lh3.googleusercontent.com/uuACFOYGAUVOXElh1GVGIKcC5jj69XqgKQkZye_cjFE4QNZDAfiUNfsV-rllPdLk6QNACfPqAEe0LKzrbSwL42ST9R5Uw4rKAT148Ze10_Y75q6wsmo3QhL-Wf_qwYU0n-HzkC_dX8orUaBONV_SqmFeyNB0y5mTlYwq59JRfP_a6VPtx3R5BdX3Kof7wFvvg8LzDgrXGLgwWZXWVNapidKm024ZWezMx7IzFTGzJCPq0ezVh8oLto_K0rfZSQxGxVwy5VWQqLDO6XXbcRWlp0AeJMESAs6H2_13cr6BXtixNLzkV1ytFg3B40k3MjRMLB2zvBRo-kKDhgxIs_02XpgfckychFXckQFkVnP79V-ip1Hdw7KP_4_McKqD0JNPOpZrcF1ALgMCpd4LHXf8tdU5nhdCnX9X5yHgJfdVJtorLC2Bt50QtW-wtYqRZdX19GRtCIR659eX8SODM9xmEN42lzxezjGScm5B5PciE9kqFTq24ICgQ7W_BGdMmgamNtfXmDG6bFKEOjKIhu-eyj5w9x1pnD5805Tfxs6EMlZeGRn00z2X38dQCcP10QNKnaOFcNV0w19VO4gZPm5AZkLDOUCOWz4ZsPoohY8JIF2Z4K33L1xElW7tLVd1XgtpghkK8hsg97_lgHe7U8q1mJ41FQ0t39tnorJbjH4zJXw2wKGDrLMc7YHfWKpQVUI5vfzJMZ42kYtOurB_if8UbdGpdlBtSlkEXr7NBYP0vxeqb-So=s888-no" alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Good Always Operations Officer</h3>
                            </header>
                            <p>Taylor directs company operations in the United States and manages goodalways.com through the shopify platform. He is passionate in helping "Good always" accomplish it's goal in eliminating extreme poverty for many families in Guatemala.</p>
                            <ul className="actions">
                                <li><a href='https://www.goodalways.com' className="button"> <p>Learn more about Good Always® </p> </a> </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src="https://lh3.googleusercontent.com/SVTCNviqHd9Va4e7TDIoj_Yja3J6dLTAMCUmJL2ytxcW3wK6yLWKTbRjZpOgD5v3RjVpoTKWvQMn7u8WS-liWGAp0mzB6pi8y315Xgt6400XJzYFIEjksef2Ym4P6DRpYE6mYyEY7eetsPBjjVpeHn4oqQg26X2KntO3uDoi3ZlyKAUC6kwEstNyc4oCOwBdi_W91-0bYwjRZW0H1dxSWMLbZFBVtwBMa4GFsREtQzUHfSDBHQl-iyPyWIymMvJohaFdQBARHAG8eBzsKxOJThxTP8CPHQTmE0aPjooUp2jq4qPWgky_qgA_cxpQU1mX5PT_4YN3O-BgR9uwUwYynQ0nYNZ0d14BxXS0QaXElVraekKVFrrl_UgEL9zs4PU2lAHJ6h9dh3oPWxKod3IAN8cLaqe2h75csTEx6sE-fd-3kLeuxKORtDjl3WRtF5kTJoOBF3TeFli4CBzCv8QvE5PC2IoiR2EHxOLc8takZkTFrSp94837nuqlyg6kJknjF7WBS32WLhNL8kkEOeNto-FM6Ha6Hx9AbULRzMTCUOGOSc7u1jTfRqG6KbWpiJNpqf7Z-_FHyOiXlIk7F1yDFEr4DC4MbvG3EdWsUAh7CNpJAwkTZFSVeXbMIZniABlMqbQgvDfyYdQ4hdSgjSAFCkaZN0DPz8wbxTRB4noseh_ga5MqL3F6Pkkq2B3ss7BK2G0Ui5Jyv1VI710GHTn0sd_kI7MDdMuDdI9WFUmjofOVxT5k=w831-h888-no" alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Light-It-Forward Foundation</h3>
                            </header>
                            <p>
                                Taylor assists Light-It-Forward Foundation in web development, networking, and brand development.
                                Light-It-Forward Foundation is the non-profit
extension of GOOD ALWAYS.
Together, they focus on ending extreme poverty by simultaneously eliminating the 3 main causes of poverty in a given geographic area.
                            <li>
                                Lack of Basic Human Needs i.e. Clean Water, Food, and Shelter.
    </li>
                            <li>
                                Lack of Income i.e. Jobs, Employment and even barter.
    </li>
                            <li>
                                Lack of Education i.e. Primary, Secondary, and Technical or University.
    </li></p>
                            <p></p>
                            <ul className="actions">
                                <li><a href='https://goodalways.com/pages/lightitforward-foundation' className="button"> <p>Learn more about L.I.F </p> </a> </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    {/* <Link to="/goodalways" className="image"> */}
                        <img className="image" src="https://lh3.googleusercontent.com/DwDvHjgtDr4on8FMa1j2RFtBx1fgKqX83Z_7p0RPgoFSU4EvJEPOTymxXnIZD5rwgba6ikPPnubzGnJ73QXOkSEgyXRmXKeeD0vrIvmN6qKHs-kEI17vT8UOcb4hp4HDi6WZw5YxXGGMcDAxb7IgFlhiruwbugyL1h1qmtqakuxBucFyxR1p9cam4YpICfZfaJPzMugnBGK7vMcsYdbjngu7u37TM-5EB7Rg_r2F4NfrqKUqwuXWe6DCIayqq4Mi3ePoECl-NwA9ePR6IvmF6YJ7EN6dTk1RuuksFZFSLpX9ktjJXqyAu4XHWvElodKuwuaNnse2l8eBIbLaUfmaEkJoeMQCqw2aDqQ-ZK8nHJvKAOXmriu6s9UKxy1LYEjPxMmWwC-2BTuZfkLeX5hThm-5teP4SFxp-oCHEr9_LSaiBwJLQ2tIgcghMj8LV1hZEOBy_7tdg3BhjMr6XeYFDAG7CBK9JikDWoxt2TXCNzFIpvm5tKcxl5yE-crOaPquAjsGFZ_U2R9RkWI6zHpsx9qVLncbQpbVbkENWjfquaulJgnoSDNy9dhVmiOo_8szaRNd1bi2BtUldE7cjE4MnVGDeDIkbvv6W-KecGUGRwCKiNgfzr6_AYpFKhYe9S99h5jmWf9plt9D7uQB4sZ9XQCEXcqTCPFG1v_2K25eUfSk0EQQSRj0TMG5GEq2NvyN8-TPVXuc-UoIJCuSbOUtCLbydmmiSPeTuOG6D2pqjJIvmg86=w687-h888-no" alt="" />
                    {/* </Link> */}
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Stones of Light</h3>
                            </header>
                            <p>Taylor supports Stones of Light Education Foundation through his efforts at Good Always. Good Always accomplishes its mission to provide education to children in poverty through the S.O.L Education Foundation.</p>
                            <p>Stones of Light provides children living in rural areas who would never have the opportunity otherwise to receive an education through a smartphone. This is done with the Edufuturo program through the Zunan platform. With nearly 80,000 pieces of education material, this program is state of the art. </p>
                            <ul className="actions">
                                <li><a href='https://www.stonesoflight.org/' className="button"> <p>Learn more about S.O.L.</p> </a> </li>
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing