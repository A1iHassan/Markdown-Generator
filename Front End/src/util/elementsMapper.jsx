import BlockquoteElement from "../components/mark down/blockOfQuote";
import BoldElement from "../components/mark down/bold";
import BoldAndItalicElement from "../components/mark down/boldAndItalic";
import CodeBlockElement from "../components/mark down/codeBlock";
import HeadingElement from "../components/mark down/heading";
import HorizontalRuleElement from "../components/mark down/horizontalRuler";
import InlineCodeElement from "../components/mark down/inlineCode";
import ItalicElement from "../components/mark down/italic";
import LinkElement from "../components/mark down/link";
import OrderedListElement from "../components/mark down/orderedList";
import ParagraphElement from "../components/mark down/paragraph";
import UnorderedListElement from "../components/mark down/unorderedList";

const components = {
  heading: <HeadingElement />,
  paragraph: <ParagraphElement />,
  bold: <BoldElement />,
  italic: <ItalicElement />,
  BoldAndItalic: <BoldAndItalicElement />,
  blockquote: <BlockquoteElement />,
  orderedList: <OrderedListElement />,
  unOrderedList: <UnorderedListElement />,
  codeBlock: <CodeBlockElement />,
  inlineCode: <InlineCodeElement />,
  horizontalRule: <HorizontalRuleElement />,
  link: <LinkElement />,
};
export function mapElements(arr) {
  return arr.map((element) => (
    <div key={element.split(" ")[1] + "parent"}>
      {Object.keys(components).map((key) => {
        if (element.includes(key)) {
          return <div key={element.split(" ")[1]}>{components[key]}</div>;
        }
      })}
    </div>
  ));
}
