import PageContainer from "./PageContainer";
import { ListMain, ListSub, ListDate} from "./ListStyle";
import Title from "./Title";
import MyUl from "./MyUl";

export default function Education() {
    return (
      <PageContainer>
          <main>
            <Title>Education</Title>
            <MyUl>
                <ListMain>Undergraduate: Boston University</ListMain>
                <ListSub>B.A. in Computer Science</ListSub>
                <ListSub>B.A. in Economics</ListSub>
                <ListDate>Boston, MA. 2021 - Present</ListDate>
                <ListMain>High School: Escola Viva</ListMain>
                <ListDate>São Paulo, Brazil. 2016 - 2019</ListDate>
            </MyUl>
          </main>
      </PageContainer>
    );
  }