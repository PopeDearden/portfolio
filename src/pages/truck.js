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
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        {/* <BannerLanding /> */}

        <div id="main">
            <section id="" className="">
                <div className="inner">
                    <header className="major">
                        <h1>What the Truck?</h1>
                    </header>
                    <div className="content">
                        <p>A Food Truck Tracking Application (Mobile only!)</p>
                        <p>whatthetruck.app</p>
                    </div>
                    <a href="https://www.whatthetruck.app" className="button special">Visit What the Truck!</a>

                </div>

            </section>
            <div className="grid-wrapper">
                <div className="col-9">
                    <div className="box">
                        <h3>This application was created as part of a group project at Dev Mountain.</h3>
                        <h3>What the truck is a truck tracking app concept. Created with two user types (Food Trucks, and Customers) the application would allow for Food Trucks to alert loyal followers of their whereabouts and future event plans.</h3>
                    <h3>Technologies used: React, Redux, Sass, CSS, HTML5, Javascript ES6, Node, Express, Bcrypt, PostgreSQL, Google Maps API, Google Geo API, Twilio. </h3>
                    </div>
                </div>
                <div className="col-3">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/9nH-QwY7cVMwxJT-G5M9KFGXGcDCvuWyrp9zEIyh4BpCCsT-XhtQx93z9EP93VkNsyGIYAy7KsLJCkFWd8l2UMBjZwAUpxvX8nUVPLgQAIU7l7JSq_SdJGoiT5MBfABbR9877yuPvoroXjlPuxSeejSRJtkQuAnjgcKcX7jyR5fX2hBeFYkBq2FO1bXaKNpNqnmEOxwYiH_RosS9djoCa-S5FyqaZwOkEAOYJVwwtkiD0-3o8vWT4DFbO9L5hEqdDqtr_-bIUMbssm1wPX93TipABS6GZhZScpy5SIR8kXkaQw3MbuUXeUwxES2z-S3NqoC65qN3MjWuvbw7VV0OdvchxweSWToqzRX-a5JuPp96mmfttQ-7SKx2ysuJz6oTOPGrjZk37RDPdmFEQles4F_n67VOevu_klElIrDB69hrfOXbykeuY4ElD9gHBpEd8H5R7kyD339_000juDwtQ9jRWXcHQf2drlS16XW4DaLI68caz-AR5QzImRRlOvYLPySqs6-fNIgt1Y6Xrdn34S6JFGNpEaPWueNdC0YC8f6D8JjJRfX5O6INfkkP1O1CONFLYEq5odMI5_ioiZ4Ig_Ox2hhlhiIEV2lOTi88zApvsaIDlyHCqbvDqbvkRB7SZNbDUyDUYphBwQ-e1Dt0si1jLuUqI1gAbb4f9U4vFbjneZphHpsbmB936U7cs7kV_kr8uNkbrK2bzoW43Bev7kwL8wK6RW6cA36ax3J1CuVvihrq=w688-h690-no" alt="" srcset="" />
                    </span>
                </div>
            </div>
            <div className="grid-wrapper">
                <div className="col-4">
                    <h1>About What The Truck:</h1>
                </div>
                <div className="col-7">
                    <h2>This guide only covers the main aspects of the application. For more information, contact Taylor (info below).</h2>
                </div>
            </div>
            <div className="grid-wrapper">
                <div className="col-2">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/enLWVKfNJ6olQkAZyzmvjuxxxBJnzE1SFjgPzP9nFb2p5j1ELWaAcME7TyCtvaEnTa1V63dS6s6WkNZoQIjRti_OR3pgDWgEfa7w0qPK4OOGHMoPwLx7bdDZ_CoO4XvagVeVXQfUtcRxLwoEeNPXSGrDFBOgGblqmNK-RZQB9kVv_C2a4UTSP9mU1LO9kw-KRn2CDi2O5-lTQ8LV-kjkOFsTROnfHdFjIT9On_-es5hvwwQ46bt41ujHHh3koQXpmubB23ZzdJtpMe_TIiMsp2LnvU_lQVwhD_jPFu2bD6v_8gvB4221Y64Sh7rhj0Dz9bFc5MBP0ipjIgWnJInEUwfjOwljC0ABfdRPJD5ZS26GD1x3nUPTbif7r02wLhoeif5dXuR8QJoky64NHbIIQ4Qfy3cpdfrPieZ4jFzB-TnKjoAyB-3Xzb2KuiDB1B2AovNdBqotKiOJ98tGjXofiSGnJtik-h5rG27T47O2plrxKseAvRAtp0kaNIxqBx6YMHmmtxiDpO5YJqgMV1c8wOEG0fft-mtlxx8R7i35JmzZk179sFl7QVvpdOq7lvJil6QduTMz7ptzAf2Do9_jmtSs2RS4ALjs0GYdflzeyrsuxyn80Oi6CxxZ8jPaFP81tM0CbtRgGgTKQNE9J_y7qkl2zx7EThVKnS8BzVRkHslNAmMebtzX_59006GoI-SsLEfosh2rc1kPvz7IeZMSITrNjSbIG1F2gNnKaxtodwS4xP9h=w436-h848-no" alt="" srcset=""/>
                        </span>
                </div>
                <div className="col-4">
                    <h1>Customer Landing</h1>
                    <p>The default landing page is for customers where they have the option to either view a list of Food Trucks, or a list of events</p>
                </div>
                <div className="col-2">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/KyEjshAvVfyP2y6ev1PkdIWiEIx-8BAd0YGIW-inZ3fgnnSAVPdK_naIGrb6hqkJKvqBkvkTzkwdUbAhyvAXKCQxPBq29A5KwagnGVHezzlwgM5vQ513-vS-74FU0npIUAMywOZF5D6qUszb-oN0a5WkfHw03nskEWew1MOoJDxkLyYXNrYgK8Wk-e3g-Qkwe8OoHWvACCihzZdMzNGd9GWk_qdcH0H1htCIGuvmpjPNsNjLlTvEImRrfXJSgt7T9Hj728Eu0TLwd8kdX6dXNFuG-zDzJWnPFePIiCnRchATlBX6zq8nty2_eZ8dVWfMnvBfx9XoCj1AooSopmlT5U18EgO177LRT4Ic3Lgl8L8VB1g4x5hQoWXpJMD3Qf1XJTzASz509Bs70Ugo7QGyRpcxWY4mFh65gGtJcaYg2ZBwjjq0lYL6YoK1PJkdbFVxrEVfqYYKvDv6H3GKCNBD-g1NupvcphoVio-ZvsulQ5VNrggZMw0WkFha9uvJMecgF-l6_stB-x5vZi9XtlazEKZYp1OBHItbeSPsAv6RZlyQJP21KMtOki6HCiQUxf3tjMvBd9yPX4g2ftM8oQ4V3ggPZ84ugLPFVgpOophyjapM1THbTXgtHNyuWXxu7jmSHufRFli4cnWZClnYLyLLSP_-AhRemzYi0Ol0I3TTfvxDaZPyMTnl9ghktUaAVGfOljFfGuLY2go8_hr0csc7EhRk0BYmo5UguCXM3NDoJRNLZKWC=w433-h846-no" alt="" srcset=""/>
                        </span>
                </div>
                <div className="col-4">
                    <h1>Truck List</h1>
                    <p>This page displays a list of the Food Trucks currently registered. Users can select the Trucks to view more information.</p>
                </div>
                
            </div>
            <div className="grid-wrapper">
                <div className="col-2">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/DJHKbp4TcIkSOM7iAHumGg8cGTPk6aM4aa2ayTHU-axYVp7zFTtifslNj_rEmmwSgLWAc0v3hqQIEJDIjz-4TuCmTq45SLGrO4Yzt85V23z-rmJblxcQHWQqba4Fhwv1JwgyFMDvpBVtk2TDcsX6VdBvRyRlKi29hTcw3ulU8PpDHuBDn_dRGhPRIGubYSpxmL96xXlGHHeg5kFT4SW80jFX26rsZMHEHAPWdJ0W7ePWK70cg1O7M6Jh5-aRR7AtRs48-7RuLeOu10wDuDDzyeRarHRNI1zxEiN3zsQbt-3glUQe9sOnWVVOxME1MxdV47XqD3ymkmUP_AFs4Eeo1cfPxEM8_bH4EXSCBM2xG4F0akK7AMXLJgiEXTL2kbY_6h0sHZJjkt489wLLZ6ocOadJ8dN3NVN-Y_aCnJkSh_CUjIeO9xBfZgJsLd1m9_c0XHsjP4siH6w9JLhNJDQ-B0Sf9r98UI40Xi3s8606LXKCsZGqZbc3BQnsMklqBUtfEX0pzXDXY3_b1WmhERpjFgFnMixNv2iud0ZsYgVT7Lh0cvyscllLLwlVVpE9mXL9wBD-8a5ksA_hUzO4VK2IJqICdufHFTTehTVEFgcTSWwTxb1fb7P-SwJPV5Byff2If5j86ATJvo6m_J2BzYioVW2WzKpqLMYH5NAlmzKLsLaYDrSXsymhkA5_zahAomgwEGD4SqCoewbIqzC0uL3QV7-nhZSAzX10H4IO2VAMQYSDFQzk=w439-h848-no" alt="" srcset=""/>
                        </span>
                </div>
                <div className="col-4">
                    <h1>Truck Info</h1>
                    <p>This page displays information of the selected truck, including contact info, website rul, and upcoming events. </p>
                    <p>If a user is logged-in they will be able to select the follow button to receive twilio text alerts whenever that truck creates an event.</p>
                </div>
                <div className="col-2">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/7RXGbGjxYdabw5cKQY6LYtUkW1vYoFrCl2kwuxjfYbC3tlc2F4VXOWVg39Uf60A3QetmktzWSY2Q99Ydeak2ANByjL73kHRAiAgew48TuuG32Els_LGD815lWzYEuwqZOgXWJlxwJiCDiJ1FH7YT03nGNhGhB9X0Z-PripH2yHRRd0QeeS3se1Cf6d0oWdxDuvQeEPtEMyww4IC2MUI3Ct1d7O3yNUtZ55qt5p-iLnMsPSL2CfmCJUFlTvobJ2sEAyYwAddwEMqN0eJ6lz_jjqv4l-alx1o6KEsI7Ip9icWQjNsPk4W7SQVLxKJKBt3USy9ctdGjB8nDLjsohKkUdCJjBaJ7X7qdqu8YxM11rAocszF5vFLoLBoUf6LJSaaq5KsMwVpseS_zwzMMW-VvvBu786bI0N11lTKU-pz_lgOaJMQ-z71_GIsJ9Y0zPKtz35M4iChd1Zyue7ZUNEYOYdMRH9f534wBwL7lljUPte8mHBjmy1eUeqbqO6wemh2JkGRgqJp6CbAYOITwxD3gZVz-gSwCgpJ7QU3GSzz34ZoppAbJYpNSPikHClgfG8BxomVg1nENmhCGR1LuuAmuBsjWSOuhsbD6q9cB5AA5rSGEF71X1JG6SMbcOwMsAeUdmWZnzoC8f_2gTXc0pepzIqQIf7w5PawMI2ydSmkj5I-Ulp3D2luWKRescl9CPFDFvtq2fjh9wJWJQrJyF8G-Ua6wyEA3bWKWmvDwHbkgKT4mzNCh=w435-h848-no" alt="" srcset=""/>
                        </span>
                </div>
                <div className="col-4">
                    <h1>Truck Info - scroll down</h1>
                    <p>The Truck Info page additionally displays a Google Map with pins of upcoming events.</p>
                </div>
                
            </div>
            <div className="grid-wrapper">
                <div className="col-2">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/n292eCbiwFHF9XRQeHxWSO1S9SCL0ZEqLcQEPx849ogzZbLzmQMep69cSGnzvW5xu5SMYz16xWRysL-yaL2roFBcWjM8m56ujRrFvoPqnV1oKa3QYV6qyf481jqgezPAD-lo_Wy6aWEcOclwG1_1hrvLcxGJR6n57QoR_LoWF2xp9ZdEdxpZk4z_jISgONPAMtPo_3bH2PksDSv3YxmPpvjznj0xEQyhFCVrFkQQ5c02XbaPA2C1-thu-4EpLV0DrQO-Jv1IE7zYiHjxOslga50ipYjrW_0SbWrL49zz6i5NJtGEkMOUdwURFvehTgKElsjZ3WG-9Tn5FezVL9QbKyvPqoBVa6t4wnexzaIkpeOvF4AuJgljNyOwSUu4vcqI_AnRiq_BzVR0UvrxLJ99VdjfaNeap1pYfxfqAvUr5fWmTzOLM2AzYMQjEXQMe8sp9Mjb0OYnLBJVkuaW60QAsQj8XgLj1NZfy2oj_Qb5FBjCcI2WPzdojrbC7I07iwZ42-KFc2GkrDGcfSHowKHocBn8gZimJ8Xn6VhWHlqEorb48uwq07HyU3vsD8OTLThoQ-W-7-UbIq3iUI0G1PQ3sCzTZZOJNaKSgU6kevKXgPxeWlkCt_mpgNSlrW88u18UOlCv9Xnu0llJCb_dliDjmbTpRYfhQ4ahN3qDq61ruenc0MZ3booXOlj1II0Gkr-buorT_jNIPeVH63JRllb2aKxAm6jKKlh_sA2K9Wyyibnlw9tZ=w437-h849-no" alt="" srcset=""/>
                        </span>
                </div>
                <div className="col-4">
                    <h1>Event List</h1>
                    <p>The Event List page displays a list of all events with location and date information. Below each event is displayed which truck will be attending. </p>
                </div>
                <div className="col-2">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/7RXGbGjxYdabw5cKQY6LYtUkW1vYoFrCl2kwuxjfYbC3tlc2F4VXOWVg39Uf60A3QetmktzWSY2Q99Ydeak2ANByjL73kHRAiAgew48TuuG32Els_LGD815lWzYEuwqZOgXWJlxwJiCDiJ1FH7YT03nGNhGhB9X0Z-PripH2yHRRd0QeeS3se1Cf6d0oWdxDuvQeEPtEMyww4IC2MUI3Ct1d7O3yNUtZ55qt5p-iLnMsPSL2CfmCJUFlTvobJ2sEAyYwAddwEMqN0eJ6lz_jjqv4l-alx1o6KEsI7Ip9icWQjNsPk4W7SQVLxKJKBt3USy9ctdGjB8nDLjsohKkUdCJjBaJ7X7qdqu8YxM11rAocszF5vFLoLBoUf6LJSaaq5KsMwVpseS_zwzMMW-VvvBu786bI0N11lTKU-pz_lgOaJMQ-z71_GIsJ9Y0zPKtz35M4iChd1Zyue7ZUNEYOYdMRH9f534wBwL7lljUPte8mHBjmy1eUeqbqO6wemh2JkGRgqJp6CbAYOITwxD3gZVz-gSwCgpJ7QU3GSzz34ZoppAbJYpNSPikHClgfG8BxomVg1nENmhCGR1LuuAmuBsjWSOuhsbD6q9cB5AA5rSGEF71X1JG6SMbcOwMsAeUdmWZnzoC8f_2gTXc0pepzIqQIf7w5PawMI2ydSmkj5I-Ulp3D2luWKRescl9CPFDFvtq2fjh9wJWJQrJyF8G-Ua6wyEA3bWKWmvDwHbkgKT4mzNCh=w435-h848-no" alt="" srcset=""/>
                        </span>
                </div>
                <div className="col-4">
                    <h1>Truck Registration Page</h1>
                    <p>The Truck Registration Page allows for Food Trucks to register their trucks for the application.</p>
                </div>
                
            </div>
          

        </div>

    </Layout>
)

export default Landing