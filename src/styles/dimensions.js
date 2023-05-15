const GENERAL_DIMENSIONS = {
    DESKTOP: {
        HEIGHT: 1920, 
        WIDTH: 1080
    },
    MOBILE: {
        HEIGHT: 375, 
        WIDTH: 812
    },
    BUTTON_GAP: "20pt",
    LOGO: {
        MIN_WIDTH: "100px",
        MIN_HEIGHT: "72px"
    }
};

const MOBILE_DIMENSIONS = {
    HEADER: {
        IMAGE: 240, // TODO: Find out if this is the height*
        TEXT: "35pt",
        TAHU_TEXT: "62pt"
    }, 
    TEXT: "14pt",
    TEXT_WITH_EMPHASIS: "20pt",
    FOOTER: {
        HEIGHT: 488
    },
    BUTTON: {
        FONT: "14pt"
    },
    ICON: {
        HEIGHT: "40px"
    }
};

const DESKTOP_DIMENSIONS = {
    HEADER: {
        TEXT: "120pt",
        TAHU_TEXT: "200pt"
    }, 
    TEXT: "25pt",
    TEXT_WITH_EMPHASIS: "35pt",
    FOOTER: {
        HEIGHT: 488
    },
    BUTTON: {
        FONT: "18pt"
    },
    ICON: {
        HEIGHT: "60px"
    }
};

export default GENERAL_DIMENSIONS;

export { MOBILE_DIMENSIONS, DESKTOP_DIMENSIONS };
// * From https://docs.google.com/document/d/1TaWO_0zytsLIaFUhuh5PMxXiBa59iyBPd-S8QwhzDWI/edit#heading=h.ton969m3fyau
