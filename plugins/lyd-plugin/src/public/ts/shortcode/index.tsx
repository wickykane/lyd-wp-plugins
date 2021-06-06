import { FC } from "react";
import { __ } from "../utils";

const ShortCode: FC<{}> = () => (
    <div>
        {/* This value identifies the template - the template can be moved or renamed without affecting this identifier */}
        <input
            id="xdTemplateIdentifier"
            name="xdTemplateIdentifier"
            defaultValue="166e5c3a-f928-420c-aa38-38143b129514"
            type="hidden"
        />
        {/* This value is only applicable when using the RESTful API - see last tab above */}
        <input id="xdUsageIdentifier" name="xdUsageIdentifier" defaultValue={""} type="hidden" />
        {/* This value identifies the user profile */}
        <input
            id="xdUserIdentifier"
            name="xdUserIdentifier"
            defaultValue="0be25e29-3f67-495e-a7b8-b34341feeb18"
            type="hidden"
        />
        {/* This value can be set to empty if you choose to use the default XpressDox results page */}
        <input id="xdReturnURL" name="xdReturnURL" defaultValue="1" type="hidden" />
        {/* You can pre-populated the interview with data by setting this value.  Initial data must be in XML format consistent with that found in XpressDox data files */}
        {/* Important - the xml data must be encoded to Base64 format for the post to be successful */}
        <input id="xdInitialData" name="xdInitialData" defaultValue="1" type="hidden" />
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
        <input id="xdthemeName" name="xdthemeName" defaultValue="Default" type="hidden" />
        {/* Alternatively a custom color can be specified here to set the Theme. Any valid HTML color code can be used e.g. #a64d79 */}
        <input id="xdCustomColour" name="xdCustomColour" defaultValue="#a64d79" type="hidden" />
        {/* Possible values for InterviewSize are: Small, Medium, Large and xLarge */}
        <input id="xdInterviewSize" name="xdInterviewSize" defaultValue="Medium" type="hidden" />
    </div>
);

export { ShortCode };
