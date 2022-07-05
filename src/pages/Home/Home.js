import React from "react";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "./Home.css";
import Title from "../../components/UI/Typography/Title/Title";
import Text from "../../components/UI/Typography/Text/Text";
import IndexButton from "../../components/UI/Buttons/IndexButton/IndexButton";
import NarkhnamaLogo from "../../assets/images/NarkhnamaLogo.png";

function Home() {
  return (
    <>
      <ContainerLayout>
        <main>
          <div className="hero-section">
            <div className="hero-content">
              <div className="col-7">
                <Title color="green">
                  <img src={NarkhnamaLogo} alt="logo" height={130} />
                </Title>

                <Text color="white">
                  A platform for finding prices of all the things across
                  Pakistan and keeping check and balance
                </Text>
                <Text color="red">
                  پاکستان بھر میں تمام چیزوں کی قیمتیں معلوم کرنے اور چیک اینڈ
                  بیلنس رکھنے کا پلیٹ فارم
                </Text>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="top-headings">
              <div className="mb-4">
                <Title color="green" align="center">
                  Narkhnama's
                </Title>
                <Text>
                  An initiative for controlling the prices of different products
                  that people buy daily which include dairy products, fresh
                  fruits, dry fruits, vegetables, poultry and many other
                  products and to make the officialprice lists available to
                  every individual
                </Text>
                <IndexButton link="/price-lists">
                  Visit Narkhnamas / <br /> نرخ نامہ
                </IndexButton>
              </div>

              <div className="mb-4">
                <Title align="center" color="red">
                  Complaint
                </Title>
                <Text>
                  Keeping a check on retailers and shopkeepers, if anyone found
                  selling things at a higher price than that set by the
                  authorities, simply click the complaint button and reach out
                  to us with the issue.
                </Text>
                <IndexButton link="/file-complaint">
                  File Complaint / <br /> شکایت درج کرو
                </IndexButton>
              </div>
            </div>
          </div>
        </main>
      </ContainerLayout>
    </>
  );
}

export default Home;
