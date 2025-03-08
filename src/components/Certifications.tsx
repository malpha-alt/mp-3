import PageContainer from "./PageContainer";
import styled from "styled-components";
import { ListMain, ListSub, ListDate } from "./ListStyle";
import Title from "./Title";
import MyUl from "./MyUl";



export default function Certifications() {
    return (
      <PageContainer>
          <main>
            <Title>Certifications</Title>
                            <MyUl>
                                <ListMain>Python Programming Bootcamp Certification</ListMain>
                                <ListSub >Completed an intensive bootcamp covering Python fundamentals, data structures, and object-oriented programming.</ListSub>
                                <ListSub >Developed projects using Pandas, NumPy, and Flask to apply data analysis and web development concepts.</ListSub>
                                <ListDate >Issued: June 2023</ListDate>
                                <ListMain>AWS Certified Cloud Practitioner</ListMain>
                                <ListSub >Demonstrated knowledge of AWS Cloud services, architecture, and security best practices.</ListSub>
                                <ListSub >Gained hands-on experience with EC2, S3, IAM, and cost management tools.</ListSub>
                                <ListDate >Issued: January 2024</ListDate>
                            </MyUl>

          </main>
      </PageContainer>
    );
  }