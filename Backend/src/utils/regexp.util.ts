"use strict";

import RE2 from "re2";

const regexp = {
    /**
     * validUsername RE2 engine:
     * 
     * - Starts with an upper or lower case alphabetic letter
     * - Ends with:
     *      - upper or lower case alphabetic letter
     *      - number between 0 and 9
     *      - minus ( - )
     *      - underscore ( _ )
     *      - dot ( . )
     */
    validUsername: new RE2(/^[A-Za-z]+[A-Z-a-z0-9.\-_]{5}$/),
    /**
     * validPassword RegExp engine:
     * 
     * - At least one uppercase English letter (?=.*?[A-Z])
     * - At least one lowercase English letter (?=.*?[a-z])
     * - At least one number (?=.*?[0-9])
     * - At least one special character (?=.*?[#?!@$%^&*-])
     * - Minimum eight in length .{8,}
     */
    validPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$€£%^&*-]).{8,}$/,
};

export default regexp;