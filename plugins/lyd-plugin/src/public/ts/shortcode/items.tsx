import React from "react";
type Props = {
    download_ids: string[];
    filenames: string[];
};
const api = (id: string) => `https://novustrade.co:8081/api/xpressdox/download-file-by-download-id?download_id=${id}`;

// eslint-disable-next-line import/no-default-export
export default function DocumentItems({ download_ids = [], filenames = [] }: Props) {
    return (
        <div className="assemble-results">
            <h2>Assemble Results</h2>
            {filenames.map((file, index) => {
                return (
                    <div className="result-items" key={index}>
                        <a target="_blank" rel="noreferrer" href={api(download_ids[index])}>
                            {file}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
