import React from "react";
import { Tree } from "antd";

const MyDocumentPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onSelect = () => {};

    const renderFolder = () => {
        return (
            <Tree
                showLine
                onSelect={onSelect}
                titleRender={(node) => {
                    console.log(node);
                    return (
                        <div>
                            {node.title} <span>+</span>
                        </div>
                    );
                }}
                treeData={[
                    {
                        title: "My Documents",
                        key: "my-document",
                        children: []
                    },
                    {
                        title: "Shared folders",
                        key: "shared-document",
                        children: []
                    }
                ]}
            />
        );
    };

    return (
        <div className="lyd-my-document-page">
            <div className="left-col">{renderFolder()}</div>
            <div className="right-col">13123</div>
        </div>
    );
};

export { MyDocumentPage };
