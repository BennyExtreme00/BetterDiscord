/**
 * Format strings with placeholders (`{{placeholder}}`) into full strings.
 * Quick example: `PluginUtilities.formatString("Hello, {{user}}", {user: "Zerebos"})`
 * would return "Hello, Zerebos".
 * @param {string} string - string to format
 * @param {object} values - object literal of placeholders to replacements
 * @returns {string} the properly formatted string
 */
export default function formatString(string: string, values: {[index: string]: string | object}) {
    for (const val in values) {
        let replacement = values[val];
        if (Array.isArray(replacement)) replacement = JSON.stringify(replacement);
        if (typeof(replacement) === "object" && replacement !== null) replacement = replacement.toString();
        string = string.replace(new RegExp(`{{${val}}}`, "g"), replacement);
    }
    return string;
}