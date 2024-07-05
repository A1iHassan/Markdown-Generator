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

export function mapElements(arr, dispatch, ast, setAst) {
  return arr.map((element) => {
    const components = {
      heading: <HeadingElement ID={element.split(" ")[1]} />,
      paragraph: <ParagraphElement ID={element.split(" ")[1]} />,
      bold: <BoldElement ID={element.split(" ")[1]} />,
      italic: <ItalicElement ID={element.split(" ")[1]} />,
      BoldAndItalic: <BoldAndItalicElement ID={element.split(" ")[1]} />,
      blockquote: <BlockquoteElement ID={element.split(" ")[1]} />,
      orderedList: <OrderedListElement ID={element.split(" ")[1]} />,
      unOrderedList: <UnorderedListElement ID={element.split(" ")[1]} />,
      codeBlock: <CodeBlockElement ID={element.split(" ")[1]} />,
      inlineCode: <InlineCodeElement ID={element.split(" ")[1]} />,
      horizontalRule: <HorizontalRuleElement ID={element.split(" ")[1]} />,
      link: <LinkElement ID={element.split(" ")[1]} />,
    };
    return (
      <div key={element.split(" ")[1] + "parent"}>
        {Object.keys(components).map((key) => {
          if (element.includes(key)) {
            return (
              <div key={element.split(" ")[1]}>
                {components[key]}
                <button
                  onClick={() => {
                    dispatch(`delete ${element}`);
                    const newAst = { ...ast };
                    const newChildren = newAst.children.filter(
                      (node) => node.id !== element.split(" ")[1]
                    );
                    newAst.children = newChildren;
                    setAst(newAst);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  });
}
