import { FC } from "react";
import { __ } from "../utils";

const ShortCode: FC<{}> = () => (
    <div>
        <h3>{__("Short Code Example")}</h3>
        <p>{__("I got generated from your new plugin!")}</p>
    </div>
);

export { ShortCode };
