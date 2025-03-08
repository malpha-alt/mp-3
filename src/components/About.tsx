import PageContainer from "./PageContainer";
import { ListMain} from "./ListStyle";
import Title from "./Title";
import MyUl from "./MyUl";

export default function About() {
  return (
    <>
      <PageContainer>
          <main>
          <Title id="title">About</Title>

          <MyUl>
            <ListMain>Name: Matheus Alpha de Andrade Souza</ListMain>
            <ListMain>Date of Birth: 29 AUG 2001</ListMain>
            <ListMain>Location of Birth: BA, Brazil</ListMain>
            <ListMain>Location: Boston, MA</ListMain>
            <ListMain>Education: Boston University</ListMain>
            <ListMain>Major: Computer Science and Economics</ListMain>
          </MyUl>
          </main>
      </PageContainer>
    </>
  );
}