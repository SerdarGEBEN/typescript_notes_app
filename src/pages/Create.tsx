import { Container } from "react-bootstrap";
import Form from "../components/Form";
import { NoteData, Tag } from "../types";

export type CreateProps = {
  handeleSubmit: (noteData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const Create = ({ handeleSubmit, createTag, availableTags }: CreateProps) => {
  return (
    <Container className="py-5">
      <h2>Yeni Not Oluştur</h2>

      <Form
        handeleSubmit={handeleSubmit}
        createTag={createTag}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default Create;
