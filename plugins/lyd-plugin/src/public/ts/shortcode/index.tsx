import React, { FC } from "react";
import DocumentItems from "./items";
import { useScript } from "./useScript";
import { parse } from "query-string";

const templateIdentifier = localStorage.getItem("templateIdentifier") || "166e5c3a-f928-420c-aa38-38143b129514";
const userIdentifier = localStorage.getItem("userIdentifier") || `0be25e29-3f67-495e-a7b8-b34341feeb18`;
const usageIdentifier = localStorage.getItem("usageIdentifier") || ``;
const redirectUrl = localStorage.getItem("redirectUrl") || `https://novustrade.co:8081/api/xpressdox/get-download-ids`;

const ShortCode: FC<{}> = () => {
    const { search } = window.location;
    const params: any = parse(decodeURIComponent(search));

    const downloadIds: string[] = params["download_id[]"] || [];
    const fileNames: string[] = params["filename[]"] || [];

    useScript("https://eu.xpressdox.com/Integration/LoadScript.ashx?id=jquery", 1000);
    useScript("https://eu.xpressdox.com/Integration/LoadScript.ashx?id=xpressdoxLoader", 1200);

    return downloadIds.length === 0 ? (
        <div className="lyd-document-container">
            {/* This value identifies the template - the template can be moved or renamed without affecting this identifier */}
            <input id="xdTemplateIdentifier" name="xdTemplateIdentifier" value={templateIdentifier} type="hidden" />
            {/* This value is only applicable when using the RESTful API - see last tab above */}
            <input id="xdUsageIdentifier" name="xdUsageIdentifier" value={usageIdentifier} type="hidden" />
            {/* This value identifies the user profile */}
            <input id="xdUserIdentifier" name="xdUserIdentifier" value={userIdentifier} type="hidden" />
            {/* This value can be set to empty if you choose to use the default XpressDox results page */}
            <input id="xdReturnURL" name="xdReturnURL" value={redirectUrl} type="hidden" />
            <input id="xdInitialData" name="xdInitialData" value="" type="hidden" />

            {/* The interview will be loaded into this container */}
            <div id="divInterviewContainer">
                {/* This HTML will display a loading gif while the interview and code are loading from the XpressDox cloud */}
                <div id="divInterviewLoading" style={{ height: "500px" }}>
                    <div
                        style={{
                            margin: "100px auto 0px auto",
                            height: "64px",
                            width: "64px",
                            background:
                                'url("https://eu.xpressdox.com/ComponentStyling/LoaderMask/Images/Loader.gif") no-repeat'
                        }}
                    />
                    <div style={{ margin: "15px auto", height: "20px", textAlign: "center", fontWeight: "bold" }}>
                        Loading...
                    </div>
                </div>
            </div>
            {/* Possible values for ThemeName are: Default, Albatross, Cardinal, ElectricOrange, FiscalShrike, Lourie, LumoGreen, PowderBlue, PurpleTurtle,RoseRed, SlateBlue, Turaco, Wagtail */}
            <input id="xdthemeName" name="xdthemeName" value="Default" type="hidden" />
            {/* Alternatively a custom color can be specified here to set the Theme. Any valid HTML color code can be used e.g. #a64d79 */}
            <input id="xdCustomColour" name="xdCustomColour" value="#a64d79" type="hidden" />
            {/* Possible values for InterviewSize are: Small, Medium, Large and xLarge */}
            <input id="xdInterviewSize" name="xdInterviewSize" value="Large" type="hidden" />
        </div>
    ) : (
        <DocumentItems download_ids={downloadIds} filenames={fileNames} />
    );
};

export { ShortCode };
