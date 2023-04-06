import { Editor } from "@tinymce/tinymce-react";
import { initRichText } from "../../../common/initRichText";

const RichText = ({ dataExample, name, change }) => {
  return (
    <Editor
      textareaName={name}
      initialValue={dataExample}
      init={initRichText}
      onEditorChange={(e, newText) => change(e, newText)}
    />
  );
};

export default RichText;
