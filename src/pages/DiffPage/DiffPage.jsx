import Header from "../../modules/Header/Header";
import Sidebar from "../../modules/Sidebar/Sidebar";
import { Container, Content, DiffContainer, InnerContent } from "./Styled";
import ReactDiffViewer from "react-diff-viewer";

const oldCode = `
Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития. Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.
Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу. Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.
`;
const newCode = `
Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
Равным образом консультация с широким активом требуют определения и уточнения модели развития. Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.
С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация с широким активом требуют определения и уточнения модели развития. 
`;

const DiffPage = () => {
  return (
    <Container>
      <Content>
        <InnerContent>
          <Header />

          <DiffContainer>
            <ReactDiffViewer
              oldValue={oldCode}
              newValue={newCode}
              splitView={true}
            />
          </DiffContainer>
        </InnerContent>
      </Content>
      <Sidebar />
    </Container>
  );
};

export default DiffPage;