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
            <section id="bannerT" className="major">
                <div className="inner">
                    <header className="major">
                        <h1>Technoglyph</h1>
                    </header>
                    <div className="content">
                        <p>A Petroglyph analysis database</p>
                    </div>
                    <a href="https://www.technoglyph.org" className="button special">Visit Technoglyph</a>

                </div>

            </section>
            <div className="grid-wrapper">
                <div className="col-9">
                    <div className="box">
                        <p>Technoglyph is a unique full stack web application built with the React library.</p>
                        <p> Technologies used: React, Redux, Sass, CSS, HTML5, JavaScript Es6, Node, Express, Bcrypt, PostgreSQL, Google Maps API, ChartsJS </p>
                        <p>Throughout the Wester United States, there are mysterious petroglyphs that to date, no one has been able to decipher. Technoglyph was created to assist in the research of these mysterious petroglyphs. The applicaiton provides a platform to store information about each petroglyph location and detailed data on each symbol. The application combines the data from each symbol and location allowing for in-depth research on potential geo-relations to each symbol.</p>
                    </div>
                </div>
                <div className="col-3">
                    <span className="image fit">
                        <img src="https://lh3.googleusercontent.com/r1EeDW4ji_HgwW_hegDTkSR0DaaTmCs5fVAFaM2ZKiFPlJH0NQWRoMhNibpBeh_-ABUDjodMr9UYtRlvYVHVweH3Wd0Lr44Sxi7iKayFHW_PdLIdA5a8-vUbTRmNDXozsyfDtiKhVL5GvW6WU9NgqIASXhJ0DzAmM5qd3Ya8ct4yWjghJNypLrK9RJwX2YYxDqCpaO8rqiqnPUTVaN8v3ISSNCNx6-4HaLdaguNs0nevh_aiQy_wjcVLR-Id5accBlTBRsGnFPOFrroZkrKAQ1ofxAHqrOpsJvqK-NT81mveRIB0Q1NT8VJbZuRXzJWk2fhwJ4axBEhlzbgJzeXP2fMxUJ8r5DW1qf8c_maQ22piWL5PIvmhQwVD5cvNiZvoiJwY_sDBihrf4TKJPlhW5WdtNMEX-_CW_2mz8cdyvPP1u4vXf0cxDUHNkcvmTUy0IxVGJUWnYhdy1ypRWDTJ1HGLOWUao2_NDSjSYJQMOJanmJplhBWLYwzkrqpot60zUbR46iERhCJ5zaQHREC4bnszemybYwal0W-X6mGGzqedU_xCBTNnZQkDy7H_qxfvbQGr89Df2-O-usIzFzZrRQRreRVUK2n2XLDCv2u2-vI8UntWpbPU-OX5j8mMknZ0KBXV7V2z8fRBudP8-Mbgexf9yghjk75YcPYMEeHuOvz7yN05bYxRX97vNzD1AmTFLtsv2INEGrdwPGjAgKhMgdAIbHRI_Hj-mCotreJH7dreVhnF=s937-no" alt="" srcset="" />
                    </span>
                </div>
            </div>
            <div className="grid-wrapper">
                <div className="col-4">
                    <h1>Technoglyph Guide:</h1>
                </div>
                <div className="col-7">
                    <h2>This guide only covers the main aspects of the application. For more information, contact Taylor (info below).</h2>
                </div>
            </div>

            <div className="grid-wrapper">
                <div className="col-4"><h1>Home</h1><span className="image fit"><img src="https://lh3.googleusercontent.com/XbwCVYxFUsqQOFokyPTXfHSGGSnOgSf2sHVJrEz26d9WYuMNu641UHC206dD6rvZFLh95cCwVMQBjuRJr0l8K6o7zGNOSVDkpGru3GY1PduljOl7lp0LaY5QibPleMGzFrLkZ_su9H6MnuZdNYs6X0iHNzdCmhuAlJH1WAGBBC7kuh8Cc3bpBY9tHT0lzpoOM9o3NJfkaJZCRqLVmUJh5z6INJe6KLGXtNoC5BC1Wy1j_Jur3OVeZFvVUuaGiEC1CA9Rhh857s2T8vH0cCeuA8owwBMsQ0DLsaf5OtGkIAiR1gVhV7FQMDxQazJoiaACKGGmjqZl8T4Muse7QpswFn6r86v_K9bBf-_gMV2H6Au8Qk4f-eMFT2USFEhsn2V7kbCmh4_4SVlvm9OtLP1wfevOlREAOzBXPQdCEHeo8QUpDEodwwBJQHL336yVivc3YqBMEtuHOBhYizPofLymoEPK6IoSnmSQkrF2F74DPgj4yc7AKGvcbbMYLBZY974K6MM_UxqqaaKiyGcJoZ4Nlc8Ryz_kJHHugjuP5khYFk2hXLBz09DssUtnlIYhdcfm-D51BJGd5IUj5OJWNQjuWspFuCs0AfXBiPgq470RPvBTe_9kEx90-486kZPwudA0x5Vq27Wy-gaKRITyxZ5Ritp5U_KmdPBtnjOmW6Y0WpabKBptcJFx5AeH9Kr7MiSF8rs5J1TWxrJSKnFhWoL8XCSbxgsmhrRG_JdWlru1Aq76ueg4=w575-h282-no" alt="" />
                </span><p>To login, select "I'm a guest" and then select login.</p></div>
                <div className="col-4"><h1>Symbol Library</h1><span className="image fit"><img src="https://lh3.googleusercontent.com/IuoFEwY9bOz-TmixPFvzRZOIP3CSIDuZKL3ppnj_OhnvasK9B2RcuWSbp5PShGJ6essH3nmac9QiXElgcTCC5H1R2wTfSo9HFF8G7yjX68aaNWhcf2zBU0F-J2OtQm3GT1RBT8R-PYG4kZtgaEsHyzKoWPhUozmoSUnsGAIL9s3oL8BXTdc6Jafi5PtKOQzjpZLcxA7cqxSC6-NySFG5sRmx64ySDRYVDWQAvJYb-fEUSp6kzHPUgoJfZNwFbg-cQwrO5qQ19uwe2luPdkCi5Hd3l8q6HZlJ0jhg6quFLYKhQLlY33rbZygjWeBdJcAYqkBZnxAYdTlz_OBXAfIUEtGEH_9r-eJdJsU5Lmn2FuPGwghoMk5W8IsFhOS3ADbT6h69VOYvxTGn-Rtg7CwacTmRfj34ohGl6-ABAM6zqJWgKF6woSmY3g5I_IdkGGpFNkvvjLhm5o1rr18dBWYFm90CFKlbpWoFn_PeyCDkBvKtry3hgniXImIUXQ6kyA9BVPaPc4HpfQ6trrkAYyEE7uRWds0m1QA1-SK3zsIjzfaqX3mu_4PLLWVOzjjeWjMsvik_KcOACSaIj-SWnUf8N6N-ZRWWYhnVK4v09MIhTqtDIeBHAT7TbFi2PvxFDWXVE88KxgtcLSugHiMnE60CblpKZM0Gsg2LD9dup3VMSQR-M-jTVI-uKngQvnQDE9RgDrJJ2hSzosDVkpdKw2IudK3QPblkpx3CSHa0E00zvIQ4N3P7=w1915-h933-no" alt="" />
                </span><p>The Symbol Library combines all symbols found at each loaction and displays them in one collection. Symbols can be searched for by attribute, like "Hand". When a symbol is selected, potential meanings are displayed on the right side of the dash. If "View locations" is selected, the application will open a page displaying each location the symbol is found at.</p></div>
                <div className="col-4"><h1>Glyph Locations</h1><span className="image fit"><img src="https://lh3.googleusercontent.com/MfpC9Dbr8V3kFyBtg_m4fL0CWA51W3R2zX4p0WTCFVLRAwk2-3orFRc-WzSX3NNAEUzWmxwJ1l44hHVEeqM6zk7QQ96adesXC1nwsSJ4D3TSb6vXx8ZBEKH6nCnJp5RHWegeQRCtPKf-YbdlIxA4ttT2AIp2B404eSVGR1S143tuXV5v0og0zNbehvWK4JAdh0bZ-RqRpcOp_rbzrZxPUAMwlBC7tGjhH4sK5Kco4OL4axXSy-TzGapM5lejRw3SzLgF1WIU406E5sNA-2NFK74tX_59l4WteKp0NWyt_bNw44FMnXbTb4Lv7TuzHsjQF5cvbKm316kpYZB5K41zmrftIXDnkbpXX4R3bW4NGmRKh60b1jRk-PkhSqMc86x-MzR_OM6kqjQdbu1wcPwYRgfr609E8dKGPBaqZDmyzk7IJNsZiimBaygSmMJccZq6P442v8UVZWu2co7KfxAto1hWLnWmOdi4yenzc0H-ke0Ghhk1kQj4JUDcE8qB3AuyKNPt7SNj5wA-YPY0ayoX7YSPslz2-BYVC08AWkqScRz-pY3Qovl_jo8fI9nEuW8eHMARvUYz2NYKrrLniQHBhxo4gIbaSL_l51-aW23vc4Dm7gV-2mFm70tjwvxUnqAHPDWQFbJDi0rKADOyxQ3tp3F70hi6DooNxUPBDHVBN-C5knel_1t8zMTcBEPI-aNP0o3zBNieBn-vvtWqxyZOdUUzJdNlQuJL9VQxtw7nEreYDd-x=w1897-h926-no" alt="" />
                </span><p>The Glyph Locations dashboard displays an image of each location that is in the database. Selecting the image will open the "Location Dashboard".</p></div>
                <div className="col-4"><h1>Location Dashboard</h1><span className="image fit"><img src="https://lh3.googleusercontent.com/hKmZTE0v4YAHC4lpapTxh6g0C3rK3Kssqn_d-2Ems4Vogc8TmkMjyDDbWty4J35QBBh_EXp8RJcFjdczaojuXHrWzFKHxD22kMfjHhVpsIw3O7ULEzeTZreO0hHrUQ9X9xdQHLs4pgSuHroSHU5Ptt6vWbcUQfpf_eJA_sxueCQI6YbfYZPecyTiv-pWKCU5qCxjOvjD69pY50Knbn45toGPw3nO7SrV6QzWg-DTTlvBAa02C68aHVR5z1Lmm_ZAaF2sJv_mVm5zLRw0EGNeCk-yoihYRKVR0hfDh4IZBXck3z4q5g0yEFhseb9c3ZM89nTjOkxUijUg-30XFNyoA1xnsXS6dOF3M0ALNznUkmfrJF1ybjIM06PBKiGLPvK32tmvakJln6z02SOCJtuK-24rnqQgVWj0wHOyO-vzDoHw_Ce92h1EgOtA-DHDJpFY-8Luju4ytbK6zXy-YfeT9RuGGvFpL1ZlL0xxw1Uqw7rcDz4SI1Lamp5i1D-aqCYHUmBfRse1rdont2e7JvKTOoaITiel89B-xBOEw409wlecUCDIbylgk_alfzjwQeaW-keoGav6WHrkwOvxoAqT4SsjJqioZwisM3AnRGmKycuckt45IUl54On796PtDfglWuKLKUHDMVRUtozhCnwpOSwxSpZyBAviCJx9uCniOzVE8gB2Q9G70X9yn09uQr_uiYbGE2jc-nPVH1MABRyGQGC7-XpP2TplVAy43OuBF12x6_i8=w714-h349-no" alt="" />
                </span><p>The Location Dashboard displays each image that is found at the location. Admins can select the image and edit the glyphs information like attributes and meanings. Each glyph has data assocaited with it so that the symbols appear in the same order and position as they are found in the real word petroglyph panel. Notes can be added to each location by admins.</p></div>
                <div className="col-4"><h1>Google Map</h1><span className="image fit"><img src="https://lh3.googleusercontent.com/-_u2IG6cXiIxXrS5D31ALEU2nTjJ7kNuokobPu_8HJHIm0lrFy4JpuhjcpitwOOF1JUrStgCIZaKqId2Gj4025vv8VbkQthZ7Rim3KNl_4U3n-HGj9oV9JB6f2ILW6d4Zj4GC2k5j0cFj9vPHjq9j1p88gbeFFa67z_6eL1MAg0jjowGz786M6N9tB81sfiHBLtqiprC9X2q60Q2_-qNU5mB2I7vryzRNNkRhmwsTQ9-_b1d4nTdLyQmyrhGhLePNh6fHS0RRM6sX7JN7MnYCn3IwxcfmUHHyH-afqdogLVZMEVy5U7Onrc53gJkZ6P-QrPDlkNKC4-qqAYikzym2-5f5kEhNSri4ySYlGDdv9q6aqzUSpSOmH85gb2Ad55CYSp--V2Oq9fQQ213eYOr6Tyff5chI6bsVh37SoMjyUQOd7liHi8P-nRKeey9p_gOAw1GeqaTDY0tdiJD6zWkZJTdu-MshYn7XXlwwdOhVOUvC6uuFZZbC655_FzklJp6ib-62lt8q0Cja0B7uueshD35zpQUKDdqs0eZMIJ2pWwOvhMh5nQUW0yomZLEYpQ5bMf4519yNlDxRbmIltI_m849oHV8-5jfqdQuRhjX3Ur_Tp7WfGUelTC5aiGcJZEDCFavOGNIh1ohze9G2RN9-7ypbBSnzxf-S9qrsTqrpxXJh-PHAyg3bUbgPfysEgu3sINY7f9qNhKppAKUs8bunlevU8BGbWlOt85Pu_PZWAA7MtbA=w1891-h919-no" alt="" />
                </span><p>The Google Map displays the location of each petroglyph panel. When a user clicks on the pin, it will redirect them to the location dashboard associated with that location.</p></div>
                <div className="col-4"><h1>Symbol Geo-Search</h1><span className="image fit"><img src="https://lh3.googleusercontent.com/tC-whD913O2Fs3Vrs3MLufu8iyojeABv-gb0VHgMeG15csuWgkYVbevkgApOETOdKu5HP9UxJ4CHW2O1NQ7pkUafAYPIgn0ndUCiyaS4y7LvrsgnsoXPkSxA58pAE2xYI8amFA4Ap9CDrFYkFmGTQYdmeRJxbNBA-TzI94vgB5LRsSirbw1VJp7l4ViWdA1WxjFSxYnz8e5voCADgILCka9K1okqWaOoC-o8MYfoj_sjOt6eywXhr5BGZzOuWIiVb71rjpwfV7997nLZe_LSS-XgaJHBfsoBBW_k-t3WeRhAuHrtWaGkRtJJtbq2Vg6-wWjh4lsHuOYuztoteqrK6KSeeYrwyygLzTSLcATkDFyQTz_VR553MSaeOCm0B1yggC4TTHjNNGgtZYn07Atwu--CUK0TLWA7c-UfnejIgC9bFUS_xquvuOcmGJYBgYYjGB8gBelrwZksxbtSPV5Ww8tWfQ__PzqUuURmP17ESKkuopTV6ae9Ep1QHrdROBiDHdKQD6uoOXtZIL-tMeplQj3wEZf4SkeHnWfCQ-IXuSIs4cJDGV4pE7afkQPJZQOV3BSBMf1VS3SdyFrzNTgsx9Di6C2b8UJDptpaDZb5OuFbqNVkw8Ddoa4cLliDrCtip-4eFLa4wIkHoO3zuRklqpfEOc2NlaTtKKJOdPzfj6HOFCE8HPPqUWO7p7xyVOeHKZ1r3vvVWcB1Uz3ce6SL22AyHYqIVziV3ZM3eL1tWfnVV8t5=w722-h347-no" alt="" />
                </span><p>This feature of the application is my favorite. It combines symbol location, attributes, and panel information into one search function. You can search for symbols by attributes, the applicaiton will instantly filter through the symbols with that attribute displaying the location it is found at and dualy displaying the location on the Google Map.</p></div>

            </div>
            <div className="col-4"><h1>Technoglyph has a responsive design:
                </h1></div>
            <div className="grid-wrapper">
                <div className="col-2">
                <span className="image fit"><img src="https://lh3.googleusercontent.com/2ujAIirw8g6KopEMGahGmPOunjn1X0pqP0UKOhOqOdF-d_z42N1epc-8B2uOUQH8tZRiwgNkfz0Z3hWXxE38oIvvMUIo4jSrzr2fkSwoyl4tGhPQ6vFwa0LQwxpfsfLNPbmyZLkNTgyLx_-aXrO_yXp36F9no9mQTLiV-HDos6KUNmu4hgzgSkZodTu1544lyv5H2-WoWWb3D6ntrjKpb1bPy1aLAT0Tl_3ylsHfN3klFHmHPZInrJJosR-RSUoQlCuMIlJfWzMLWqtVljaZuCBc9ALNz-BYm8Lb-VXweRzoTDr1XoJF8r5JzS1HUssJ12OF1RZf2W_9A82SG89qc1ADBbcRs2Z3enFL8ZYM6WqqZAQnN2oDQyyhw0_8jwkV9AbFNCfd_izozncD_ecU5rT3rL9dI9Dko0pr25qoMbKgGZJjAMWy1DV50b1Ug4z6ALy8e7q1HXiXKwg94R393cU_4c76DEZkS8EVWyA3VCHz1AoMF-jfL_3QpIkdTapbm8HztTGn_by2jij6enF40JWS7nynNBBQsvKhlEjc4WsELZGChdhZx6j7QOw5tV6OOBqij0MnCteWjxeLLHa3dvBzyoJhnhVz1fNk7smz3qEG3frxNV-c9YWu_3NNoiH34jek3cKiMLCcYqkS36nEyCjuIyE0EBYIi5vnORe1NLjjXgw5xvxPDBGIhcV16sjtGeRmrZBUvG4e9UOoZv0DB-3hF_J0irHGL_u_kFMIElAGaSxK=w461-h843-no" alt="" />
                </span>
                </div>
                <div className="col-2">
                <span className="image fit"><img src="https://lh3.googleusercontent.com/IM1BmLkEXrwSptXQOY6EgW81u-bDV3SRTwfVD1eGJGmZ7s0bPs0wOZOpdl3lWK2KKSVnsZCgrlybk-If4dtRKZOtMUb3H-ulx5dZ1T3PpMifEjhU4lwq8heUo_HOdcXTg_UyMgreXax0cYhGVe5qmqFusxVFwgch832kOoICnvPhBHFsz94m9_YGau_Mk-JxB8HZbHZSsHd5WcQNJF68va-sN2nEBumg8qF1JaBsK_fr40MLedq-X_ILLeKPbGtWQcoqFDsBIeitX_Lu1D0XEtTTKsCSoVyWmcdju9PMNG1qrPSQNnmMmmpy3cxk2EdceL1yE3Praa6gAmUSrP2tAFR9_MqlSYFMJ-LRYOo2TLXMbhlcWR-ExZr4UdI8FrIloAZ6TZEt7hxmd54-g0Ls1G5vj5d7x-cUsMgH5VUni3LoR-Anw_9EoZEbT66XwU-CmoPMDE-uxsZtvEeolaYa_X9z254atTnW8pwIA7vO6eMaub78HJFXI_PKg2xf3PYb5eCJLw5ZHf141WqaqRoG8cuNKVRZ_BlG6qoo-7OhnyEbfuwhvhViAo2aDBw7yUZ4mr80Ad0kpHGYfJIT5haCimZPOa-yY97me6isyjn8QUbR-yqC96s541oTl5hCucRPoiS6UVlYg3TZVzhWj7cWDfnym40BRLroPzMrCTPFTrUT1rzMp9X3VkLYsTgDNUjh6mASiQyiv0kr2e53LkzFXcUQCdBHonSndrJ7a353bVDXw2kj=w470-h847-no" alt="" />
                </span>
                </div>
                <div className="col-2">
                <span className="image fit"><img src="https://lh3.googleusercontent.com/eOaLBfYnQS3dAv5yakq43tVu04ak6Wo9g2VIt1rfNeNg81ojGA4leD4ymaQGyrXO3CGZcz2tn10LoUqOfaAEWKFXlLaN_FSluVp7GgwHM8I8gfdG7IRbd4bFSbOqbcdnOQlkD_r8Joqf8jpr57UizYO0DbrgGJXLuj3bF0w0mR13D4Vwou9XNMzarQeTqhoZHTSYxZBZPHmQ0OPuYjQmzCrzhPHw7ovEyDwf78vpTDcp_AprRBTvyjLACCN7c9mjDuAODLHfup2cfew-Mirj8JIpPiNcqOgooWjSoNyIhJq4u5NC9cv9drnIiVu29MZhvurZXfzqh8DaOwfYf4jLC-6xwfBYs6XjvwuyZIaJioWA0k4rlw3PQamdOeUCciNRwvgnYWgGyJeH-yq4gaQ-lvNxqroetqWw3CaGEYb6dJ8_QPw_a3YuTJtfPcRh3Cx0-7ljJ9xLH5NKve7aRUwBj9oQb5sm9Eu_wYB_U-b56ZXTTAQJd72ezLstm5skmc3Zi3EOgcoWR95xy330h1m1KpX2tjqx6cPkljWX-y6jbI6uFSrKSRB0NTM3IJ2eVRkY9R0HsERV5i5K88UePBVHA1ziibAb20TRCd1gX3QeXmr2KqeKLfYnDA9XeD9qvU2shr05eThW1-rswvPKKJPehjcIL3bli6zEgf7YYD4orhoyQzxrxD7FuHB6zq88qpU_wThWViuGp98Ctm_qgcR3PwlIG_RXlo3V9Tii_BUzd1Xo-dGu=w472-h844-no" alt="" />
                </span>
                </div>
                <div className="col-2">
                <span className="image fit"><img src="https://lh3.googleusercontent.com/jJUCOB5vPoXNP0hKVZYwwnDB3lCl0lnELpvKIZ1kC8tq89FAXj3zgJQabCFrevRj8kEINhrdtnbXo4wjvAeWe1VBLodhA4UynLWT3Vdv6TQYrMk6ShtXu8vJFXkqLZ1jF44eq3-MZvxkJqTXNnITIyVc1ZFNH_ui3bgFng1sWF8m0qRdM0Lsocc5cON9no0y5q18xEA9_cLL1av71Z4qlp5KoGusNN30AmiZMrJP__dMfc8Ampnyvdu2FOP6eG-p2N-Rx9nSpiUsNhRqVgWPpZXgzsWzljhfHN4d-eP9rSVViUoZ_Ck8cnxoZQOOnJG5OYOedWJ3nLK9cfTbsr0iftwO4wDRFdbLt3Xaasq0e1-HDzQ3S6pp7cl6wJoEhHHn9Ey3zpA4ohyMeV7c6s_Hw82nBbnog3fMuVEesUhkn3KghY4fKuTswapIsji0gyn8rRCViKmedEW0UQekMsMC-FCHMsbV1iGiRdeuFCvs_rivjG4IzmEmkB4G82I_0Bz7BAwyXBFxEVA32XM5DWtsB7UX6XN-CQl0NlMUjrZSNmDCDYd7VctMBtV0OV0VCyyPazFhtiEZ3JxhWz79g0Hk0SI6KouYkI6feex4BtqhCHGkMehMKqFzXS-LcUGjS81hzTN2pbfxENJu3aTgPWBFedA8wMMDBiyDGp0t1PHiqhvEYx8XLWqhDJoe8NZrIPW06tEAGOA2OcPX7ZkwTgg__uYUidnaIawIj49WLCecFRhOX-CQ=w489-h844-no" alt="" />
                </span>
                </div>
            </div>

        </div>

    </Layout>
)

export default Landing