"use client";

import {ContentEditable} from "@/components/editor/editor-ui/content-editable";
import {editorTheme} from "@/components/editor/themes/editor-theme";
import {ListItemNode, ListNode} from "@lexical/list";
import {CheckListPlugin} from "@lexical/react/LexicalCheckListPlugin";
import {InitialConfigType, LexicalComposer,} from "@lexical/react/LexicalComposer";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {EditorState, ParagraphNode, TextNode} from "lexical";
import {useEffect, useState} from "react";

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [
    HeadingNode,
    ParagraphNode,
    TextNode,
    QuoteNode,
    ListNode,
    ListItemNode,
  ],
  onError: (error: Error) => {
    console.error(error);
  },
};

const placeholder = "Une très belle villa...";

type EditorFieldProps = {
  editorSerializedState?: EditorState;
  handleChange?: (value: EditorState) => void;
  className?: string;
};

function EditorStateSync({
  editorSerializedState,
}: {
  editorSerializedState?: EditorState;
}) {
  const [editor] = useLexicalComposerContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!editorSerializedState || hasInitialized) return;

    const serialized = JSON.stringify(editorSerializedState);
    const editorState = editor.parseEditorState(serialized);

    editor.setEditorState(editorState);
    setHasInitialized(true);
  }, [editor, editorSerializedState, hasInitialized]);

  return null;
}

export function EditorField({
  editorSerializedState,
  handleChange,
}: EditorFieldProps) {
  const [, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <LexicalComposer
      initialConfig={{
        ...editorConfig,
        ...(editorSerializedState
          ? { editorState: JSON.stringify(editorSerializedState) }
          : {}),
        editable: false,
      }}
    >
      {/*<Card>*/}
      {/*  <CardContent className="relative">*/}
          <div className="relative">
            <RichTextPlugin
              contentEditable={
                <div className="">
                  <div className="" ref={onRef}>
                    <ContentEditable
                      placeholder={placeholder}
                      className="relative block h-72 overflow-auto px-0 py-4 focus:outline-none"
                    />
                  </div>
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <ListPlugin />
            <CheckListPlugin />
            <OnChangePlugin
              onChange={(editorState) => {
                handleChange?.(editorState);
              }}
            />
            <EditorStateSync editorSerializedState={editorSerializedState} />
          </div>
      {/*  </CardContent>*/}
      {/*</Card>*/}
    </LexicalComposer>
  );
}
