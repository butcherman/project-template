/*
|-------------------------------------------------------------------------------
| Helper function to determine variant classes and functionality for components
|-------------------------------------------------------------------------------
*/

export const useVariantHelper = () => {
    /**
     * Get the base color of the variant
     */
    const getVariantBase = (variant: VariantType): string => {
        return {
            danger: "rose-600",
            dark: "gray-900",
            error: "red-500",
            help: "violet-600",
            info: "blue-400",
            light: "neutral-300",
            primary: "blue-500",
            secondary: "blue-300",
            success: "green-500",
            warning: "yellow-400",
            none: "",
        }[variant];
    };

    /**
     * Basic background color per variant
     */
    const getBackgroundClass = (variant: VariantType): string => {
        return {
            danger: "bg-rose-600",
            dark: "bg-gray-900",
            error: "bg-red-500",
            help: "bg-violet-600",
            info: "bg-blue-400",
            light: "bg-neutral-300",
            primary: "bg-blue-500",
            secondary: "bg-blue-300",
            success: "bg-green-500",
            warning: "bg-yellow-400",
            none: "",
        }[variant];
    };

    /**
     * Class information for background and text colors based on variant level
     */
    const getVariantClass = (variant: VariantType): string => {
        return {
            danger: "bg-rose-600 text-white focus:outline-rose-700",
            dark: "bg-gray-900 text-white focus:outline-gray-900",
            error: "bg-red-500 text-white focus:outline-red-860",
            help: "bg-violet-600 text-white focus:outline-violet-700",
            info: "bg-blue-400 text-white focus:outline-blue-500",
            light: "bg-neutral-300 focus:outline-nuetral-400",
            primary: "bg-blue-500 text-white focus:outline-blue-600",
            secondary: "bg-blue-300 focus:outline-blue-400",
            success: "bg-green-500 text-white focus:outline-green-600",
            warning: "bg-yellow-400 focus:outline-yellow-500",
            none: "",
        }[variant];
    };

    return {
        getBackgroundClass,
        getVariantClass,
        getVariantBase,
    };
};
