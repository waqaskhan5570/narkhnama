import React from "react";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import "./About.css";
import Image from "../../assets/images/aboutImage.svg";
import Title from "../../components/UI/Typography/Title/Title";
import SectionCard from "../../components/UI/SectionCard/SectionCard";

function About() {
  return (
    <>
      <ContainerLayout>
        <div className="main-content">
          <Title color="green"> About</Title>
          <SectionCard
            isReversed={false}
            img={Image}
            imgSize="md"
            title={"About Narkhnama"}
            list={[
              "Get daily updated Prices",
              "View Price Lists",
              "File a Complaint",
            ]}
          >
            <p>
              Narkhnama is new and single platform where each and every citizen
              would have access to the daily prices list(knowns as Narkhmama/نرخ
              نامہ) of every district(ضلع) and can view all the prices of
              different items including fruits(پھل), poultry(پولٹری), dry
              fruits(خشک میوہ جات ), vegetables and other price lists that has
              Narkhnamas(نرخ نامہ) printed every day.
            </p>
          </SectionCard>
        </div>
      </ContainerLayout>
    </>
  );
}

export default About;
